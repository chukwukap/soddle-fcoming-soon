interface TimeObject {
  hours: string;
  minutes: string;
  seconds: string;
}

export type TimeInput = Date | number | TimeObject;

export const formatTime = (input: TimeInput): TimeObject => {
  if (input instanceof Date) {
    return {
      hours: input.getHours().toString().padStart(2, '0'),
      minutes: input.getMinutes().toString().padStart(2, '0'),
      seconds: input.getSeconds().toString().padStart(2, '0'),
    };
  } else if (typeof input === 'number') {
    return formatTime(new Date(input));
  } else {
    return {
      hours: input.hours.padStart(2, '0'),
      minutes: input.minutes.padStart(2, '0'),
      seconds: input.seconds.padStart(2, '0'),
    };
  }
};
