// components/Logic/getClients.js
import React, {useState, useEffect} from "react";
import * as XLSX from 'xlsx';

const GetClients = ({ excelFilePath, onDataLoaded }) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(excelFilePath);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const arrayBuffer = await response.arrayBuffer();
                const workbook = XLSX.read(arrayBuffer, { type: 'array' });
                const sheetName = workbook.SheetNames[0]; // Get the first sheet
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);
                onDataLoaded(jsonData); // Pass data to the calling component
            } 
            catch (e) {
                setError(e.message);
                console.error('Error reading the Excel file:', e);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [excelFilePath, onDataLoaded]);

    if (loading) {
        // While it will appear briefly this will provide a loading screen when navigating to the client pages
        return <div>Loading...</div>;
    }

    if (error) {
        // Render error to page
        return <div>Error: {error}</div>;
    }

    return null;
};

export default GetClients;