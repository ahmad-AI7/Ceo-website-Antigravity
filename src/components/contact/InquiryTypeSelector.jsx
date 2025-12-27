import { motion } from 'framer-motion';
import { BsCodeSlash, BsChatText, BsPeople } from 'react-icons/bs';

const InquiryTypeSelector = ({ selectedType, onSelect }) => {
    const types = [
        {
            id: 'project',
            icon: BsCodeSlash,
            title: 'Start a Project',
            description: 'Software development, App creation, or Technical consultancy.'
        },
        {
            id: 'general',
            icon: BsChatText,
            title: 'General Inquiry',
            description: 'Partnerships, Media, or general questions about our services.'
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {types.map((type) => (
                <motion.button
                    key={type.id}
                    onClick={() => onSelect(type.id)}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative p-6 rounded-2xl border text-left transition-all duration-300 group ${selectedType === type.id
                        ? 'bg-white text-black border-white shadow-xl shadow-white/10'
                        : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-white/20'
                        }`}
                >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors ${selectedType === type.id
                        ? 'bg-black text-white'
                        : 'bg-white/10 text-white'
                        }`}>
                        <type.icon className="text-lg" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{type.title}</h3>
                    <p className={`text-sm leading-relaxed ${selectedType === type.id ? 'text-black/70' : 'text-white/50'
                        }`}>
                        {type.description}
                    </p>
                </motion.button>
            ))}
        </div>
    );
};

export default InquiryTypeSelector;
