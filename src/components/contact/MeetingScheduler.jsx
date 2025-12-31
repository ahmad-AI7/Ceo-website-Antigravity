import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsChevronLeft, BsChevronRight, BsClock, BsCameraVideo } from 'react-icons/bs';

const MeetingScheduler = ({ onSelectSlot }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());

    // Mock dates generation
    const generateCalendarDays = () => {
        const days = [];
        const today = new Date();
        const year = currentMonth.getFullYear();
        const month = currentMonth.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Empty slots for previous month
        for (let i = 0; i < firstDay; i++) {
            days.push(null);
        }

        // Days of current month
        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(year, month, i);
            const isPast = date < new Date(today.setHours(0, 0, 0, 0));
            // User requested whole week available. No weekend blocking.
            days.push({
                date: i,
                fullDate: date,
                disabled: isPast
            });
        }

        return days;
    };

    const timeSlots = [
        { time: "10:00 AM", booked: true },
        { time: "11:00 AM", booked: false },
        { time: "01:00 PM", booked: false },
        { time: "02:30 PM", booked: true },
        { time: "04:00 PM", booked: false }
    ];

    const nextMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
    };

    const prevMonth = () => {
        setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
    };

    return (
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm h-full flex flex-col">
            <h3 className="text-xl font-light text-white mb-6 flex items-center gap-3">
                <BsClock className="text-accent" />
                Select a Time
            </h3>

            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-6">
                <span className="text-lg font-medium text-white">
                    {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </span>
                <div className="flex gap-2">
                    <button onClick={prevMonth} className="p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors">
                        <BsChevronLeft />
                    </button>
                    <button onClick={nextMonth} className="p-2 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors">
                        <BsChevronRight />
                    </button>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-6 text-center flex-grow bg-white/5 rounded-xl p-2">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                    <span key={d} className="text-[10px] text-white/30 uppercase tracking-widest font-medium py-2">{d}</span>
                ))}
                {generateCalendarDays().map((day, idx) => (
                    <div key={idx} className="h-8 md:h-10 w-full flex items-center justify-center">
                        {day && (
                            <button
                                disabled={day.disabled}
                                onClick={() => setSelectedDate(selectedDate?.toDateString() === day.fullDate.toDateString() ? null : day.fullDate)}
                                className={`w-full h-full rounded-md text-xs transition-all duration-300 ${day.disabled
                                    ? 'text-white/10 cursor-not-allowed'
                                    : selectedDate?.toDateString() === day.fullDate.toDateString()
                                        ? 'bg-[#17b6b2] text-white shadow-lg shadow-[#17b6b2]/20 font-semibold'
                                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                                    }`}
                            >
                                {day.date}
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {/* Time Slots */}
            <AnimatePresence>
                {selectedDate && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden bg-black/20 rounded-xl border border-white/5 p-4 mt-auto"
                    >
                        <h4 className="text-sm text-white/60 mb-4 font-medium flex justify-between items-center">
                            <span>Available Slots</span>
                            <span className="text-[10px] uppercase tracking-wider text-white/30">{selectedDate.toLocaleDateString()}</span>
                        </h4>
                        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                            {timeSlots.map((slot) => (
                                <button
                                    key={slot.time}
                                    disabled={slot.booked}
                                    onClick={() => !slot.booked && onSelectSlot({ date: selectedDate, time: slot.time })}
                                    className={`px-3 py-2 rounded-lg text-xs transition-all duration-300 flex items-center justify-center gap-2 group ${slot.booked
                                        ? 'bg-white/5 text-white/20 cursor-not-allowed border border-transparent'
                                        : 'bg-black/40 border border-white/10 text-white hover:bg-white hover:text-black hover:border-white'
                                        }`}
                                >
                                    <BsCameraVideo className={slot.booked ? "text-white/10" : "text-white/40 group-hover:text-black/60"} />
                                    <span className={slot.booked ? "line-through" : ""}>{slot.time}</span>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MeetingScheduler;
