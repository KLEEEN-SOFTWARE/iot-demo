import './date-interval.scss';
import 'react-calendar-datetime-picker/dist/index.css';

import React, { useState } from 'react';

import { DateTimeIntervalProps } from './date-interval.model';
import { DtCalendar } from 'react-calendar-datetime-picker';
import { KUIConnect } from '@kleeen/core-react';
import { KsButton } from '../button';

import moment from 'moment';

function DateIntervalBase(props: DateTimeIntervalProps): JSX.Element {
  const { translate, datePickerState, handleCloseDateFilter } = props;
  const { from = moment(), to = moment(), setFrom, setTo } = datePickerState;
  const fromValue = from.toDate();
  const toValue = to.toDate();
  const defaultValue = {
    from: {
      year: fromValue.getFullYear(),
      month: fromValue.getMonth() + 1,
      day: fromValue.getDate(),
      hours: fromValue.getHours(),
      minutes: fromValue.getMinutes(),
    },
    to: {
      year: toValue.getFullYear(),
      month: toValue.getMonth() + 1,
      day: toValue.getDate(),
      hours: toValue.getHours(),
      minutes: toValue.getMinutes(),
    },
  };

  const [value, setValue] = useState(defaultValue);

  const parseValue = (valueParser) => {
    return valueParser < 10 ? `0${valueParser}` : valueParser;
  };

  const parserMoment = (date) => {
    const dateFormat = `${date?.year}-${parseValue(date?.month)}-${parseValue(date?.day)}T${parseValue(
      date?.hours,
    )}:${parseValue(date?.minutes)}`;
    return { dateFormat, moment: moment(dateFormat) };
  };

  const applyClick = (): void => {
    if (value.to) {
      datePickerState.setFrom(parserMoment(value.from).moment);
      datePickerState.setTo(parserMoment(value.to).moment);
    } else {
      const dateToday = new Date();
      const parsedMomentToday = parserMoment({
        year: dateToday.getFullYear(),
        month: dateToday.getMonth() + 1,
        day: dateToday.getDate(),
        hours: dateToday.getHours(),
        minutes: dateToday.getMinutes(),
      }).moment;
      const parsedMomentFrom = parserMoment({
        year: value.from.year,
        month: value.from.month + 1,
        day: value.from.day,
        hours: dateToday.getHours(),
        minutes: dateToday.getMinutes(),
      }).moment;
      if (moment(dateToday).isBefore(`${value.from.year}-${value.from.month + 1}-${value.from.day}`)) {
        datePickerState.setFrom(parsedMomentToday);
        datePickerState.setTo(parsedMomentFrom);
      } else {
        datePickerState.setFrom(parsedMomentFrom);
        datePickerState.setTo(parsedMomentToday);
      }
    }

    handleCloseDateFilter();
  };

  const clear = () => {
    setValue(defaultValue);
    datePickerState.setTo(undefined);
    datePickerState.setFrom(undefined);
  };

  return (
    <>
      <DtCalendar
        onChange={setValue}
        initValue={defaultValue}
        type="range"
        withTime
        todayBtn
        inputClass="custom-input"
        daysClass="custom-days"
        headerClass="custom-header"
      />
      <div className="date-interval-step">
        <KsButton onClick={() => clear()}>{translate('app.dateInterval.clear')}</KsButton>
        <KsButton onClick={() => applyClick()}>{translate('app.dateInterval.save')}</KsButton>
      </div>
    </>
  );
}

export const DateInterval = React.memo(KUIConnect(({ translate }) => ({ translate }))(DateIntervalBase));
