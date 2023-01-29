//import { ValidationMessage } from '../../const/validation-messages';
//import { useForm } from 'react-hook-form';

type DatePickerOptionProps = {
  time: string;
  isAvailable: boolean;
  day:string;
}
//{errors.date && <><br/><span role="alert">{errors.data?.message?.toString()}</span></>}
function DatePickerOption({time, isAvailable, day}: DatePickerOptionProps):JSX.Element {
  //const { register, formState: {errors} } = useForm();

  return (
    <label className="custom-radio booking-form__date">
      <div>
        <input
          type="radio"
          id={day.concat(time)}
          name="date"
          required
          value={time}
          disabled={!isAvailable}
          //{...register('date', { required: ValidationMessage.RequiredDate })}
        />

      </div>
      <span className="custom-radio__label">{time}</span>
    </label>
  );
}

export default DatePickerOption;
