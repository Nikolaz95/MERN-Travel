import toast from 'react-hot-toast';

export const useCreateVisit = (addNewVisitList, navigate, data) => {
    // Funkcija koja obavlja slanje
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Dodajte klijentsku validaciju ovde ako je potrebno (npr. provera MAX_LENGTH)
        if (data.notes.length > 400) {
            toast.error("Notes exceed max length.");
            return;
        }

        try {
            await addNewVisitList({
                cityName: data.cityName,
                countryName: data.country,
                flag: data.flag,
                date: data.date instanceof Date ? data.date.toISOString() : data.date,
                notes: data.notes,
                position: { lat: Number(data.lat), lng: Number(data.lng) },
            }).unwrap();

            toast.success("Visit added successfully!");
            navigate('/travelMap/cities');
        } catch (err) {
            toast.error(err?.data?.message || "Failed to add visit!");
            console.error("❌ Error creating visit:", err);
        }
    };

    return { handleSubmit };
};