'use client'
import { useState, useEffect } from 'react';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isOverdue: boolean;
}

function getTimeRemaining(dueDate: Date): TimeRemaining {
  const now = new Date().getTime();
  const due = new Date(dueDate).getTime();
  const difference = due - now;

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      isOverdue: true
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    isOverdue: false
  };
}

interface CountdownTimerProps {
  dueDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ dueDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    getTimeRemaining(dueDate)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(dueDate));
    }, 1000); 

    return () => clearInterval(interval); 
  }, [dueDate]);

  if (timeRemaining.isOverdue) {
    return <span className="text-red-500 font-semibold">Overdue</span>;
  }

  return (
    <div className="text-gray-300">
      <span className="font-mono">
        {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
      </span>
    </div>
  );
};

export default CountdownTimer;