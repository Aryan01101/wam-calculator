import React, { useState } from 'react';
import { Trash2 } from 'lucide-react';

const WAMCalculator = () => {
  const [units, setUnits] = useState([
    { id: 1, name: '', mark: '', creditPoints: '' }
  ]);
  const [wam, setWam] = useState(null);

  const addUnit = () => {
    const newUnit = {
      id: units.length + 1,
      name: '',
      mark: '',
      creditPoints: ''
    };
    setUnits([...units, newUnit]);
  };

  const removeUnit = (id) => {
    if (units.length > 1) {
      setUnits(units.filter(unit => unit.id !== id));
    }
  };

  const handleInputChange = (id, field, value) => {
    const updatedUnits = units.map(unit => {
      if (unit.id === id) {
        return { ...unit, [field]: value };
      }
      return unit;
    });
    setUnits(updatedUnits);
  };

  const calculateWAM = () => {
    let totalWeightedMarks = 0;
    let totalCreditPoints = 0;

    for (const unit of units) {
      const mark = parseFloat(unit.mark);
      const credits = parseFloat(unit.creditPoints);

      if (!isNaN(mark) && !isNaN(credits)) {
        totalWeightedMarks += mark * credits;
        totalCreditPoints += credits;
      }
    }

    if (totalCreditPoints === 0) {
      return;
    }

    const calculatedWAM = totalWeightedMarks / totalCreditPoints;
    setWam(calculatedWAM);
  };

  const isValidInput = () => {
    return units.every(unit => {
      const mark = parseFloat(unit.mark);
      const credits = parseFloat(unit.creditPoints);
      return !isNaN(mark) && !isNaN(credits) && 
             mark >= 0 && mark <= 100 &&
             credits > 0;
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-4">University of Sydney WAM Calculator</h1>
        
        <div className="mb-4 text-sm text-gray-600">
          <p>Your Weighted Average Mark (WAM) is calculated by:</p>
          <ol className="list-decimal list-inside space-y-2 mt-2">
            <li>Multiplying each unit's mark by its credit point value</li>
            <li>Adding these totals together</li>
            <li>Dividing by the sum of all credit points attempted</li>
          </ol>
        </div>

        <div className="space-y-4">
          {units.map((unit) => (
            <div key={unit.id} className="flex gap-4 items-center">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Unit Name"
                  value={unit.name}
                  onChange={(e) => handleInputChange(unit.id, 'name', e.target.value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="w-24">
                <input
                  type="number"
                  placeholder="Mark"
                  value={unit.mark}
                  onChange={(e) => handleInputChange(unit.id, 'mark', e.target.value)}
                  min="0"
                  max="100"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="w-24">
                <input
                  type="number"
                  placeholder="Credits"
                  value={unit.creditPoints}
                  onChange={(e) => handleInputChange(unit.id, 'creditPoints', e.target.value)}
                  min="0"
                  className="w-full p-2 border rounded"
                />
              </div>
              <button
                onClick={() => removeUnit(unit.id)}
                className="p-2 text-gray-500 hover:text-red-500"
                disabled={units.length === 1}
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-4 space-x-4">
          <button
            onClick={addUnit}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Unit
          </button>
          <button
            onClick={calculateWAM}
            disabled={!isValidInput()}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300"
          >
            Calculate WAM
          </button>
        </div>

        {wam !== null && (
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-semibold">Your WAM</h2>
            <p className="text-3xl font-bold text-blue-600">{wam.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WAMCalculator;