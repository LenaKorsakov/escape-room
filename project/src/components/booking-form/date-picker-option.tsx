type DatePickerOptionProps = {
  time: string;
  isAvailable: boolean;
  day:string;
}

function DatePickerOption({time, isAvailable, day}: DatePickerOptionProps):JSX.Element {

  return (
    <label className="custom-radio booking-form__date">
      <input
        type="radio"
        id={day.concat(time)}
        name="date"
        required
        value={time}
        disabled={!isAvailable}
      />
      <span className="custom-radio__label">{time}</span>
    </label>
  );
}

export default DatePickerOption;
