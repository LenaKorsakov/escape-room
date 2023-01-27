import { ChangeEvent, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DatePickerOption from './date-picker-option';

import { useAppDispatch } from '../../hooks';
import { sendBookingInfoAction } from '../../store/api-actions';
import { displayError } from '../../store/actions';

import { QuestInfo } from '../../@types/quest-types';
import { BookingInfo } from '../../@types/reservation-types';

import { Date } from '../../const/date';
import { AppRoute } from '../../const/app-route';
import { WarningMessage } from '../../const/warning-message';

type bookingFormProps = {
  quest: QuestInfo;
}
function BookingForm({quest}: bookingFormProps):JSX.Element {
  const { slots, id } = quest;
  const { today, tomorrow } = slots;

  const initialBookingInfoState: BookingInfo = {
    date: Date.TODAY,
    time: '',
    contactPerson: '',
    phone: '',
    withChildren: false,
    peopleCount: 0,
    locationId: 2,
    questId: id
  };

  const [formData, setFormData] = useState<BookingInfo>(initialBookingInfoState);

  const handleTodayDatePickerOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      time: event.target.value,
      date: Date.TODAY
    });
  };

  const handleTommorowDatePickerOptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      time: event.target.value,
      date: Date.TOMORROW
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();

    dispatch(sendBookingInfoAction({
      ...formData,
      peopleCount: +formData.peopleCount
    })).unwrap().then(
      () => {
        navigate(AppRoute.MyQuests);
      },
      () => dispatch(displayError(WarningMessage.SendError))
    );
  };

  return (
    <form
      className="booking-form"
      action=""
      method="post"
      onSubmit={handleFormSubmit}
    >
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Выбор даты и времени</legend>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Сегодня</legend>
          <div
            className="booking-form__date-inner-wrapper"
            onChange={handleTodayDatePickerOptionChange}
          >
            {today.map(({time, isAvailable}) => (
              <DatePickerOption
                time={time}
                isAvailable={isAvailable}
                day={Date.TODAY}
                key={`${Date.TODAY}-${time}`}
              />
            ))}
          </div>
        </fieldset>
        <fieldset className="booking-form__date-section">
          <legend className="booking-form__date-title">Завтра</legend>
          <div
            className="booking-form__date-inner-wrapper"
            onChange={handleTommorowDatePickerOptionChange}
          >
            {tomorrow.map(({time, isAvailable}) => (
              <DatePickerOption
                time={time}
                isAvailable={isAvailable}
                day={Date.TOMORROW}
                key={`${Date.TOMORROW}-${time}`}
              />
            ))}
          </div>
        </fieldset>
      </fieldset>
      <fieldset className="booking-form__section">
        <legend className="visually-hidden">Контактная информация</legend>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="name">
                Ваше имя
          </label>
          <input
            type="text"
            id="name"
            name="contactPerson"
            placeholder="Имя"
            onChange={handleInputChange}
            value={formData.contactPerson}
            required
            pattern="[А-Яа-яЁёA-Za-z'- ]{1,}"
          />
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="tel">
                Контактный телефон
          </label>
          <input
            type="tel"
            id="tel"
            name="phone"
            placeholder="Телефон"
            onChange={handleInputChange}
            value={formData.phone}
            required
            pattern="[0-9]{10,}"
          />
        </div>
        <div className="custom-input booking-form__input">
          <label className="custom-input__label" htmlFor="person">
                Количество участников
          </label>
          <input
            type="number"
            id="person"
            name="peopleCount"
            placeholder="Количество участников"
            onChange={handleInputChange}
            value={formData.peopleCount}
            required
          />
        </div>
        <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--children">
          <input
            type="checkbox"
            id="children"
            name="withChildren"
            onChange={handleInputChange}
          />
          <span className="custom-checkbox__icon">
            <svg width={20} height={17} aria-hidden="true">
              <use xlinkHref="#icon-tick" />
            </svg>
          </span>
          <span className="custom-checkbox__label">
                Со&nbsp;мной будут дети
          </span>
        </label>
      </fieldset>
      <button
        className="btn btn--accent btn--cta booking-form__submit"
        type="submit"
      >
            Забронировать
      </button>
      <label className="custom-checkbox booking-form__checkbox booking-form__checkbox--agreement">
        <input
          type="checkbox"
          id="id-order-agreement"
          name="user-agreement"
          required
        />
        <span className="custom-checkbox__icon">
          <svg width={20} height={17} aria-hidden="true">
            <use xlinkHref="#icon-tick" />
          </svg>
        </span>
        <span className="custom-checkbox__label">
              Я&nbsp;согласен с
          <a className="link link--active-silver link--underlined" href="/">
                правилами обработки персональных данных
          </a>
              &nbsp;и пользовательским соглашением
        </span>
      </label>
    </form>
  );
}

export default BookingForm;
