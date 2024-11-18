"use client"

import React, { useEffect } from 'react';
import RecurrenceOptions from './RecurrenceOptions';
import DateSelector from './DateSelector';
import RecurrencePreview from './RecurrencePreview';
import { useDatePicker } from '@/context/DatePickerContext';

const DatePicker = () => {
    const { calculateRecurringDates, recurrence, dateRange } = useDatePicker();

    useEffect(() => {
        calculateRecurringDates();

    }, [recurrence, dateRange]);

    return (
        <div className="mx-auto w-full px-20 py-10 max-w-[80%] backdrop-blur-2xl bg-slate-400/30 shadow-lg rounded-xl">


            <RecurrenceOptions  />
            <DateSelector />
            <RecurrencePreview />

        </div>
    );
};

export default DatePicker
;