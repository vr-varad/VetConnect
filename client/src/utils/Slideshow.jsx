import React,{useState} from "react";

const Slideshow = () => {
    const [startIndex, setStartIndex] = useState(0);
    const doctors = [
    {
        id: 1,
        name: "Dr. John Smith",
        specialization: "Internal Medicine",
        image:
        "https://i.pinimg.com/736x/61/0a/fd/610afd43c0e13259ff5693a8b0ed3374.jpg",
    },
    {
        id: 2,
        name: "Dr. Emily Johnson",
        specialization: "Pediatrics",
        image:
        "https://i.pinimg.com/564x/d0/d8/aa/d0d8aaf4c5a076a6adcc5a2c3ec17637.jpg",
    },
    {
        id: 3,
        name: "Dr. Michael Davis",
        specialization: "Dermatology",
        image:
        "https://i.pinimg.com/564x/36/0c/43/360c43225a5000cd6d8954581565a49a.jpg",
    },
    {
        id: 4,
        name: "Dr. Sarah Thompson",
        specialization: "Orthopedics",
        image:
        "https://i.pinimg.com/564x/69/be/a2/69bea23b69eec89a500394c6c3e86035.jpg",
    },
    {
        id: 5,
        name: "Dr. Jessica Martinez",
        specialization: "Cardiology",
        image:
        "https://i.pinimg.com/564x/42/31/c8/4231c8f7fe6e9444e7a0898f6f1ea3c0.jpg",
    },
    {
        id: 6,
        name: "Dr. William Brown",
        specialization: "Oncology",
        image:
        "https://i.pinimg.com/564x/2c/65/0e/2c650e372c3c19ec8db3df0efe810519.jpg",
    },
    ];

    const handleNext = () => {
        setStartIndex((prevIndex) => (prevIndex + 3) % doctors.length);
    };

    const handlePrev = () => {
        setStartIndex((prevIndex) =>
        prevIndex === 0 ? doctors.length - 3 : prevIndex - 1
        );
    };
    return (
        <div className="flex flex-row justify-around">
        <button onClick={handlePrev}>&#10094;</button>
        <div className="flex flex-row justify-around md:gap-32">
            {doctors.slice(startIndex, startIndex + 3).map((doctor) => (
                <div key={doctor.id} className="flex flex-col justify-center items-center text-center">
                <div>
                    <img
                    src={doctor.image}
                    alt="Doctor"
                    className="rounded-lg lg:h-[400px]  h-[150px] w-[100px] lg:w-[300px]"
                    />
                </div>
                <h2 className="font-mono text-xl font-extrabold">{doctor.name}</h2>
                <p className="font-mono text-md font-semibold">{doctor.specialization}</p>
                </div>
            ))}
            </div>
            <button onClick={handleNext}>&#10095;</button>
        </div>
    );
};

export default Slideshow;
