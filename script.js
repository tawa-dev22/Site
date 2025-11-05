// Country DSA rates (in US$) - per diem base rates
const countryRates = {
    'Afghanistan': 260, 'Albania': 220, 'Algeria': 370, 'Andorra': 200,
    'Angola': 420, 'Anguilla': 530,'Antigua and Barbuda': 420, 'Argentina': 270, 'Armenia': 300,'Aruba': 390,
    'Australia': 360, 'Austria': 340, 'Azerbaijan': 320, 'Bahamas': 450,
    'Bahrain': 440, 'Bangladesh': 240, 'Barbados': 560, 'Belarus': 230,
    'Belgium': 390, 'Belize': 360, 'Benin': 220, 'Bhutan': 240,
    'Bolivia': 220, 'Bosnia and Herzegovina': 220, 'Botswana': 290, 'Brazil': 260,
    'British Virgin Islands': 370, 'Brunei': 220, 'Bulgaria': 260, 'Burkina Faso': 250,
    'Burundi': 260, 'Cambodia': 310, 'Cameroon': 250, 'Canada': 380,
    'Cape Verde': 220, 'Cayman Islands': 420, 'Central African Rep.': 270, 'Chad': 220,
    'Chile': 350, 'China': 240, 'China, Hong Kong': 270, 'China, Macau': 200,
    'Colombia': 220, 'Comoros': 250, 'Congo': 320, 'Congo, Dem. Rep.': 310,
    'Costa Rica': 290, 'Cote d\'Ivoire': 280, 'Croatia': 310, 'Cuba': 280,
    'Curacao': 340, 'Cyprus': 260, 'Czech Republic': 280, 'Denmark': 420,
    'Djibouti': 290, 'Dominica': 440, 'Dominican Republic': 280, 'Ecuador': 270,
    'Egypt': 290, 'El Salvador': 240, 'Equatorial Guinea': 340, 'Eritrea': 250,
    'Estonia': 280, 'Eswatini': 180, 'Ethiopia': 280, 'Fiji': 370,
    'Finland': 330, 'France': 380, 'Gabon': 350, 'Gambia': 270,
    'Georgia': 270, 'Germany': 330, 'Ghana': 410, 'Gibraltar': 220,
    'Greece': 240, 'Grenada': 270, 'Guam': 290, 'Guatemala': 240,
    'Guinea': 300, 'Guinea Bissau': 220, 'Guyana': 250, 'Haiti': 300,
    'Honduras': 220, 'Hungary': 250, 'Iceland': 340, 'India': 330,
    'Indonesia': 280, 'Iran': 230, 'Iraq': 290, 'Ireland': 350,
    'Israel': 400, 'Italy': 320, 'Jamaica': 360, 'Japan': 340,
    'Jerusalem': 430, 'Jordan': 320, 'Kazakhstan': 220, 'Kenya': 310,
    'Kiribati': 140, 'North Korea': 260, 'South Korea': 440, 'Kuwait': 510,
    'Kyrgyzstan': 250, 'Lao Peo': 210, 'Latvia': 260, 'Lebanon': 360,
    'Lesotho': 280, 'Liberia': 300, 'Libya': 300, 'Lithuania': 240,
    'Luxembourg': 290, 'Madagascar': 320, 'Malawi': 260, 'Malaysia': 220,
    'Maldives': 350, 'Mali': 310, 'Malta': 300, 'Marshall Islands': 270,
    'Mauritania': 250, 'Mauritius': 280, 'Mexico': 410, 'Micronesia': 270,
    'Moldova': 240, 'Monaco': 360, 'Mongolia': 220, 'Montenegro': 340,
    'Morocco': 320, 'Mozambique': 300, 'Myanmar': 190, 'Namibia': 290,
    'Nauru': 230, 'Nepal': 290, 'Netherlands': 330, 'New Zealand': 350,
    'Nicaragua': 220, 'Niger': 260, 'Nigeria': 280, 'Niue': 330,
    'Norway': 400, 'Oman': 330, 'Pakistan': 270, 'Palau': 320,
    'Palestine': 280, 'Panama': 260, 'Papua New Guinea': 310, 'Paraguay': 260,
    'Peru': 280, 'Philippines': 280, 'Poland': 280, 'Portugal': 340,
    'Qatar': 400, 'Romania': 260, 'Russian Federation': 360, 'Rwanda': 270,
    'Saint Maarteen': 300, 'Saint Lucia': 470, 'Saint Kitts and Nevis': 430,'Saint Vincent-Grenadines': 470,
    'Samoa': 300, 'San Marino': 260, 'Sao Tome and Principe': 340, 'Saudi Arabia': 480,
    'Senegal': 310, 'Serbia': 220, 'Seychelles': 330, 'Sierra Leone': 290,
    'Singapore': 440, 'Slovak Republic': 280, 'Slovenia': 310, 'Solomon Islands': 350,
    'Somalia': 240, 'South Africa': 270, 'South Sudan': 210, 'Spain': 290,
    'Sri Lanka': 240, 'Sudan': 260, 'Suriname': 220, 'Sweden': 390,
    'Switzerland': 430, 'Syrian Arabic Republic': 240, 'Taiwan': 340, 'Tajikistan': 180,
    'Tanzania': 260, 'Thailand': 260, 'The Republic of North Macedonia': 170, 'Timor-Leste': 210,
    'Togo': 280, 'Tokelau': 130, 'Trinidad and Tobago': 380, 'Tunisia': 260,
    'Turkey': 260, 'Turkmenistan': 260, 'Turks and Caicos Islands': 540, 'Tuvalu': 220,
    'Uganda': 280, 'Ukraine': 290, 'United Arab Emirates': 420, 'United Kingdom': 390,
    'Uruguay': 250, 'USA': 460, 'Uzbekistan': 180, 'Vanuatu': 330,
    'Virgin Islands': 500, 'Vietnam': 260, 'Western Sahara': 160, 'Yemen': 290,  'Zambia': 240,
    'Zimbabwe': 0
};

// Flight duration database (in hours) - approximate average flight times
const flightDurations = {
    'United Kingdom-USA': 8, 'USA-United Kingdom': 7,
    'United Kingdom-France': 1.5, 'France-United Kingdom': 1.5,
    'United Kingdom-Germany': 2, 'Germany-United Kingdom': 2,
    'United Kingdom-Spain': 2.5, 'Spain-United Kingdom': 2.5,
    'United Kingdom-Italy': 2.5, 'Italy-United Kingdom': 2.5,
    'United Kingdom-Netherlands': 1.5, 'Netherlands-United Kingdom': 1.5,
    'United Kingdom-Belgium': 1.5, 'Belgium-United Kingdom': 1.5,
    'USA-France': 9, 'France-USA': 9,
    'USA-Germany': 9.5, 'Germany-USA': 9.5,
    'USA-Spain': 9, 'Spain-USA': 9,
    'USA-Italy': 10, 'Italy-USA': 10,
    'USA-Netherlands': 8.5, 'Netherlands-USA': 8.5,
    'USA-Belgium': 8.5, 'Belgium-USA': 8.5,
    'France-Germany': 1.5, 'Germany-France': 1.5,
    'France-Spain': 2, 'Spain-France': 2,
    'France-Italy': 1.5, 'Italy-France': 1.5,
    'France-Netherlands': 1.5, 'Netherlands-France': 1.5,
    'France-Belgium': 1, 'Belgium-France': 1,
    'Germany-Spain': 2.5, 'Spain-Germany': 2.5,
    'Germany-Italy': 1.5, 'Italy-Germany': 1.5,
    'Germany-Netherlands': 1.5, 'Netherlands-Germany': 1.5,
    'Germany-Belgium': 1.5, 'Belgium-Germany': 1.5,
    'Spain-Italy': 2, 'Italy-Spain': 2,
    'Spain-Netherlands': 2.5, 'Netherlands-Spain': 2.5,
    'Spain-Belgium': 2, 'Belgium-Spain': 2,
    'Italy-Netherlands': 2, 'Netherlands-Italy': 2,
    'Italy-Belgium': 2, 'Belgium-Italy': 2,
    'Netherlands-Belgium': 0.5, 'Belgium-Netherlands': 0.5,
    // African routes
    'South Africa-United Kingdom': 11, 'United Kingdom-South Africa': 11,
    'South Africa-USA': 15, 'USA-South Africa': 15,
    'Zimbabwe-South Africa': 2, 'South Africa-Zimbabwe': 2,
    'Zimbabwe-United Kingdom': 10, 'United Kingdom-Zimbabwe': 10,
    'Kenya-United Kingdom': 9, 'United Kingdom-Kenya': 9,
    'Ethiopia-United Kingdom': 7, 'United Kingdom-Ethiopia': 7
};

// Grade multipliers for daily allowance (times per diem base rate)
const gradeMultipliers = {
    'minister': 1.50,
    'accounting': 1.45,
    'accounting_non': 1.40,
    'chief_director': 1.35,
    'director': 1.30,
    'deputy_director': 1.25,
    'officer': 1.00
};

// Representation allowance percentages
const representationPercentages = {
    'minister': 10.0,
    'accounting': 9.5,
    'accounting_non': 8.5,
    'chief_director': 8.0,
    'director': 7.5,
    'deputy_director': 5.0,
    'officer': 0.0
};

// DSA component percentages
const dsaComponents = {
    accommodation: 50,
    lunch: 15,
    dinner: 15,
    breakfast: 10,
    other: 10
};

function getFlightDuration(departureTime, arrivalTime) {
    if (!(departureTime instanceof Date) || !(arrivalTime instanceof Date)) return 0;
    const MS_IN_HOUR = 60 * 60 * 1000;
    const MS_IN_DAY = 24 * MS_IN_HOUR;

    let diffMs = arrivalTime.getTime() - departureTime.getTime();
    if (diffMs < 0) {
        let safety = 0;
        while (diffMs < 0 && safety < 3) {
            diffMs += MS_IN_DAY;
            safety += 1;
        }
    }
    const hours = diffMs / MS_IN_HOUR;
    if (hours < 0) return 0;
    return Math.round(hours * 100) / 100;
}

function formatHours(hours) {
    const h = Math.floor(hours);
    const m = Math.round((hours - h) * 60);
    return `${h}h ${m}m`; // 24-hour format: displays total hours (can be > 24)
}

// Meal eligibility functions based on Zimbabwe Government DSA rules
function isBreakfastEligible(departureTime, arrivalTime, isOvernightTravel) {
    const depHour = departureTime.getHours();
    const arrHour = arrivalTime.getHours();
    const sameDay = departureTime.toDateString() === arrivalTime.toDateString();
    
    // Departure before 07:00 - eligible
    if (depHour < 7) return true;
    
    // Arrival before 06:00 after overnight - eligible
    if (!sameDay && arrHour < 6) return true;
    
    return false;
}

function isLunchEligible(departureTime, arrivalTime) {
    const depHour = departureTime.getHours();
    const arrHour = arrivalTime.getHours();
    
    // If departing between 07:00-11:59 and still traveling during 12:00-14:00
    if (depHour >= 7 && depHour < 12) {
        // Check if journey extends into lunch period
        if (arrHour >= 12 || (arrHour < 12 && arrivalTime > departureTime)) {
            // Check if actually traveling during 12:00-14:00
            const lunchStart = new Date(departureTime);
            lunchStart.setHours(12, 0, 0, 0);
            const lunchEnd = new Date(departureTime);
            lunchEnd.setHours(14, 0, 0, 0);
            
            if (arrivalTime >= lunchStart && departureTime < lunchEnd) {
                return true;
            }
        }
    }
    
    // Arrival during 12:00-14:00 - eligible
    if (arrHour >= 12 && arrHour < 14) return true;
    if (arrHour == 14 && arrivalTime.getMinutes() == 0) return true;
    
    return false;
}

function isDinnerEligible(departureTime, arrivalTime) {
    const depHour = departureTime.getHours();
    const arrHour = arrivalTime.getHours();
    
    // If still away after 18:00 (6 p.m.)
    if (arrHour >= 18 || arrHour < 6) return true;
    
    // Check if traveling during dinner period (18:00-20:00)
    const dinnerStart = new Date(departureTime);
    dinnerStart.setHours(18, 0, 0, 0);
    const dinnerEnd = new Date(departureTime);
    dinnerEnd.setHours(20, 0, 0, 0);
    
    if (arrivalTime >= dinnerStart && departureTime < dinnerEnd) {
        return true;
    }
    
    return false;
}

function isAccommodationEligible(departureTime, arrivalTime) {
    // Still away after midnight (00:00)
    const depDate = departureTime.toDateString();
    const arrDate = arrivalTime.toDateString();
    
    // If arrival is on a different day, accommodation is eligible
    return depDate !== arrDate;
}

// Calculate DSA for destination stay where full days get all meals
function calculateDestinationDSA(arrivalTime, departureTime, perDiemRate, gradeMultiplier) {
    const dailyAllowance = perDiemRate * gradeMultiplier;
    let breakdown = {
        breakfast: 0,
        lunch: 0,
        dinner: 0,
        accommodation: 0,
        other: 0,
        breakfastCount: 0,
        lunchCount: 0,
        dinnerCount: 0,
        nightCount: 0
    };
    
    // Count complete 24-hour periods (full days)
    const stayMs = departureTime - arrivalTime;
    const stayHours = stayMs / (1000 * 60 * 60);
    const fullDays = Math.floor(stayHours / 24);
    
    // For each full day at destination, all meals are eligible
    if (fullDays > 0) {
        breakdown.breakfast = (dailyAllowance * dsaComponents.breakfast / 100) * fullDays;
        breakdown.lunch = (dailyAllowance * dsaComponents.lunch / 100) * fullDays;
        breakdown.dinner = (dailyAllowance * dsaComponents.dinner / 100) * fullDays;
        breakdown.accommodation = (dailyAllowance * dsaComponents.accommodation / 100) * fullDays;
        breakdown.other = (dailyAllowance * dsaComponents.other / 100) * fullDays;
        breakdown.breakfastCount = fullDays;
        breakdown.lunchCount = fullDays;
        breakdown.dinnerCount = fullDays;
        breakdown.nightCount = fullDays;
    }
    
    // Handle partial day at start (arrival day) and end (departure day)
    const arrivalDate = new Date(arrivalTime);
    arrivalDate.setHours(0, 0, 0, 0);
    const firstFullDayStart = new Date(arrivalDate);
    firstFullDayStart.setDate(firstFullDayStart.getDate() + 1);
    
    const departureDate = new Date(departureTime);
    departureDate.setHours(0, 0, 0, 0);
    
    // Partial arrival day (if arrival is not on same day as first full day)
    if (arrivalTime < firstFullDayStart && fullDays >= 0) {
        const arrivalHour = arrivalTime.getHours();
        // Check which meals are still available on arrival day
        if (arrivalHour < 12) { // Arrived before lunch
            breakdown.lunch += (dailyAllowance * dsaComponents.lunch / 100);
            breakdown.lunchCount++;
        }
        if (arrivalHour < 18) { // Arrived before dinner
            breakdown.dinner += (dailyAllowance * dsaComponents.dinner / 100);
            breakdown.dinnerCount++;
        }
        // Always get accommodation for arrival night if staying overnight
        if (fullDays > 0 || departureTime.toDateString() !== arrivalTime.toDateString()) {
            breakdown.accommodation += (dailyAllowance * dsaComponents.accommodation / 100);
            breakdown.nightCount++;
        }
    }
    
    // Partial departure day (if departure is not at midnight)
    const lastFullDayEnd = new Date(departureDate);
    if (departureTime > lastFullDayEnd && fullDays >= 0) {
        const departureHour = departureTime.getHours();
        // Check which meals can be claimed on departure day
        if (departureHour >= 7) { // Stayed past breakfast time
            breakdown.breakfast += (dailyAllowance * dsaComponents.breakfast / 100);
            breakdown.breakfastCount++;
        }
        if (departureHour >= 14) { // Stayed past lunch time
            breakdown.lunch += (dailyAllowance * dsaComponents.lunch / 100);
            breakdown.lunchCount++;
        }
    }
    
    const totalDSA = breakdown.breakfast + breakdown.lunch + breakdown.dinner + breakdown.accommodation + breakdown.other;
    return { totalDSA, breakdown };
}

// Calculate DSA for travel segment - uses departure country rate for departure day meals, destination country rate for arrival day meals
function calculateTravelDSA(departureTime, arrivalTime, departureCountryRate, destinationCountryRate, gradeMultiplier) {
    const departureDailyAllowance = departureCountryRate * gradeMultiplier;
    const destinationDailyAllowance = destinationCountryRate * gradeMultiplier;
    let totalDSA = 0;
    let breakdown = {
        breakfast: 0,
        lunch: 0,
        dinner: 0,
        accommodation: 0,
        other: 0,
        breakfastCount: 0,
        lunchCount: 0,
        dinnerCount: 0,
        nightCount: 0
    };
    
    const isOvernight = departureTime.toDateString() !== arrivalTime.toDateString();
    const depHour = departureTime.getHours();
    const arrHour = arrivalTime.getHours();
    
    // DEPARTURE DAY MEALS - use departure country rate (meals before you leave)
    // Breakfast - if depart before 07:00 (you miss breakfast in departure country)
    if (depHour < 7) {
        breakdown.breakfast += (departureDailyAllowance * dsaComponents.breakfast) / 100;
        breakdown.breakfastCount++;
    }
    
    // Lunch - if traveling during lunch period (12:00-14:00) on departure day
    if (depHour < 14) {
        const lunchStart = new Date(departureTime);
        lunchStart.setHours(12, 0, 0, 0);
        const lunchEnd = new Date(departureTime);
        lunchEnd.setHours(14, 0, 0, 0);
        
        if (arrivalTime >= lunchStart || (arrivalTime.toDateString() !== departureTime.toDateString())) {
            breakdown.lunch += (departureDailyAllowance * dsaComponents.lunch) / 100;
            breakdown.lunchCount++;
        }
    }
    
    // Dinner - if still traveling after 18:00 on departure day (depart during/before dinner)
    const dinnerTime = new Date(departureTime);
    dinnerTime.setHours(18, 0, 0, 0);
    if (arrivalTime >= dinnerTime || isOvernight) {
        breakdown.dinner += (departureDailyAllowance * dsaComponents.dinner) / 100;
        breakdown.dinnerCount++;
    }
    
    // Accommodation - if overnight travel (use departure country rate for the night)
    if (isOvernight) {
        breakdown.accommodation += (departureDailyAllowance * dsaComponents.accommodation) / 100;
        breakdown.nightCount++;
    }
    
    // ARRIVAL DAY MEALS - use destination country rate
    // You get meals in destination country if you arrive during/after the meal time
    
    // Breakfast - eligible if you arrive during or after breakfast time in destination country
    // If same day arrival, check if you arrive at/after 07:00
    // If overnight arrival, you always get breakfast in destination country if arrive before lunch
    if (isOvernight && arrHour < 12) {
        breakdown.breakfast += (destinationDailyAllowance * dsaComponents.breakfast) / 100;
        breakdown.breakfastCount++;
    } else if (!isOvernight && arrHour >= 7 && arrHour < 12) {
        // Same day arrival during breakfast time - you get breakfast in destination
        breakdown.breakfast += (destinationDailyAllowance * dsaComponents.breakfast) / 100;
        breakdown.breakfastCount++;
    }
    
    // Lunch - if arrive during lunch time or after (12:00 onwards) in destination country
    if (arrHour >= 12 && arrHour < 18) {
        breakdown.lunch += (destinationDailyAllowance * dsaComponents.lunch) / 100;
        breakdown.lunchCount++;
    }
    
    // Dinner - if arrive during dinner time or after (18:00 onwards) in destination country
    if (arrHour >= 18) {
        breakdown.dinner += (destinationDailyAllowance * dsaComponents.dinner) / 100;
        breakdown.dinnerCount++;
    }
    
    // Other expenses - based on average of both countries
    const avgDailyAllowance = (departureDailyAllowance + destinationDailyAllowance) / 2;
    const daysWithMeals = Math.ceil((breakdown.breakfastCount + breakdown.lunchCount + breakdown.dinnerCount) / 3);
    breakdown.other = (avgDailyAllowance * dsaComponents.other / 100) * daysWithMeals;
    
    totalDSA = breakdown.breakfast + breakdown.lunch + breakdown.dinner + breakdown.accommodation + breakdown.other;
    
    return { totalDSA, breakdown };
}

// Calculate DSA for a journey segment using meal-based eligibility (legacy - for layovers)
function calculateSegmentDSA(departureTime, arrivalTime, perDiemRate, gradeMultiplier) {
    const dailyAllowance = perDiemRate * gradeMultiplier;
    let totalDSA = 0;
    let breakdown = {
        breakfast: 0,
        lunch: 0,
        dinner: 0,
        accommodation: 0,
        other: 0,
        breakfastCount: 0,
        lunchCount: 0,
        dinnerCount: 0,
        nightCount: 0
    };
    
    // Check if this is overnight travel
    const isOvernight = departureTime.toDateString() !== arrivalTime.toDateString();
    
    // Calculate number of nights (for multi-day trips)
    const startDate = new Date(departureTime);
    startDate.setHours(0, 0, 0, 0);
    const endDate = new Date(arrivalTime);
    endDate.setHours(0, 0, 0, 0);
    const nightCount = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    
    // For each day of the journey
    let currentDate = new Date(departureTime);
    let dayCount = 0;
    
    while (currentDate <= arrivalTime && dayCount < 100) { // Safety limit
        const dayStart = new Date(currentDate);
        dayStart.setHours(0, 0, 0, 0);
        const dayEnd = new Date(currentDate);
        dayEnd.setHours(23, 59, 59, 999);
        
        const effectiveStart = dayCount === 0 ? departureTime : dayStart;
        const effectiveEnd = currentDate.toDateString() === arrivalTime.toDateString() ? arrivalTime : dayEnd;
        
        // Check breakfast eligibility for this day
        if (dayCount === 0 && isBreakfastEligible(effectiveStart, effectiveEnd, isOvernight)) {
            breakdown.breakfast += (dailyAllowance * dsaComponents.breakfast) / 100;
            breakdown.breakfastCount++;
        } else if (dayCount > 0 && effectiveEnd.getHours() >= 6) {
            // Subsequent days - breakfast eligible if still traveling after 06:00
            breakdown.breakfast += (dailyAllowance * dsaComponents.breakfast) / 100;
            breakdown.breakfastCount++;
        }
        
        // Check lunch eligibility for this day
        if (isLunchEligible(effectiveStart, effectiveEnd)) {
            breakdown.lunch += (dailyAllowance * dsaComponents.lunch) / 100;
            breakdown.lunchCount++;
        }
        
        // Check dinner eligibility for this day  
        if (isDinnerEligible(effectiveStart, effectiveEnd)) {
            breakdown.dinner += (dailyAllowance * dsaComponents.dinner) / 100;
            breakdown.dinnerCount++;
        }
        
        // Check accommodation - if not the last day, accommodation eligible
        if (currentDate.toDateString() !== arrivalTime.toDateString()) {
            breakdown.accommodation += (dailyAllowance * dsaComponents.accommodation) / 100;
            breakdown.nightCount++;
        }
        
        // Move to next day
        currentDate.setDate(currentDate.getDate() + 1);
        currentDate.setHours(0, 0, 0, 0);
        dayCount++;
    }
    
    // Other expenses - 10% per day with any eligible meal
    const daysWithMeals = Math.ceil((breakdown.breakfastCount + breakdown.lunchCount + breakdown.dinnerCount) / 3);
    breakdown.other = (dailyAllowance * dsaComponents.other / 100) * daysWithMeals;
    
    totalDSA = breakdown.breakfast + breakdown.lunch + breakdown.dinner + breakdown.accommodation + breakdown.other;
    
    return { totalDSA, breakdown };
}

function calculate() {
    // Get input values
    const grade = document.getElementById('grade').value;
    const purpose = document.getElementById('purpose').value.trim();
    const startDate = new Date(document.getElementById('departureDate-0').value);
    const fundingSource = document.getElementById('fundingSource').value;

    // Get all outbound routes with dates
    const allDepartures = document.querySelectorAll('.departure-select');
    const allDestinations = document.querySelectorAll('.destination-select');
    const allDepartureDates = document.querySelectorAll('.departure-date');
    const allArrivalDates = document.querySelectorAll('.arrival-date');
    
    let routes = [];
    allDepartures.forEach((depSelect, index) => {
        const dep = depSelect.value;
        const dest = allDestinations[index].value;
        const depDate = allDepartureDates[index].value;
        const arrDate = allArrivalDates[index].value;
        if (dep && dest && depDate && arrDate) {
            routes.push({ 
                from: dep, 
                to: dest,
                departureDate: new Date(depDate),
                arrivalDate: new Date(arrDate)
            });
        }
    });
    
    // Get all return journey routes with dates
    const allReturnDepartures = document.querySelectorAll('.return-departure-select');
    const allReturnDestinations = document.querySelectorAll('.return-destination-select');
    const allReturnDepartureDates = document.querySelectorAll('.return-departure-date');
    const allReturnArrivalDates = document.querySelectorAll('.return-arrival-date');
    
    let returnRoutes = [];
    allReturnDepartures.forEach((depSelect, index) => {
        const dep = depSelect.value;
        const dest = allReturnDestinations[index].value;
        const depDate = allReturnDepartureDates[index].value;
        const arrDate = allReturnArrivalDates[index].value;
        if (dep && dest && depDate && arrDate) {
            returnRoutes.push({ 
                from: dep, 
                to: dest,
                departureDate: new Date(depDate),
                arrivalDate: new Date(arrDate)
            });
        }
    });

    // Validation
    if (!grade) {
        alert('Please select an official grade');
        return;
    }

    if (!purpose) {
        alert('Please enter the purpose of the journey');
        return;
    }

    if (routes.length === 0) {
        alert('Please complete all fields for at least one outbound route');
        return;
    }
    
    if (returnRoutes.length === 0) {
        alert('Please complete all fields for at least one return route');
        return;
    }
    
    // Get the last return arrival date as the end date
    const endDate = returnRoutes[returnRoutes.length - 1].arrivalDate;

    if (startDate >= endDate) {
        alert('Return date must be after departure date');
        return;
    }

    // Calculate DSA using meal-based eligibility
    const gradeMultiplier = gradeMultipliers[grade];
    let totalDSA = 0;
    let totalBreakfast = 0, totalLunch = 0, totalDinner = 0, totalAccommodation = 0, totalOther = 0;
    let breakfastCount = 0, lunchCount = 0, dinnerCount = 0, nightCount = 0;
    
    // Track outbound journey - meal-based DSA
    let totalOutboundHours = 0;
    let currentTime = new Date(startDate);
    
    for (let i = 0; i < routes.length; i++) {
        const legDepartureTime = routes[i].departureDate;
        const legArrivalTime = routes[i].arrivalDate;
        const legDurationMs = legArrivalTime - legDepartureTime;
        const legHours = legDurationMs / (1000 * 60 * 60);
        
        totalOutboundHours += legHours;
        
        // Calculate DSA for this leg using both departure and destination country rates
        const legDeparturePerDiem = countryRates[routes[i].from];
        const legDestinationPerDiem = countryRates[routes[i].to];
        const legResult = calculateTravelDSA(legDepartureTime, legArrivalTime, legDeparturePerDiem, legDestinationPerDiem, gradeMultiplier);
        
        totalDSA += legResult.totalDSA;
        totalBreakfast += legResult.breakdown.breakfast;
        totalLunch += legResult.breakdown.lunch;
        totalDinner += legResult.breakdown.dinner;
        totalAccommodation += legResult.breakdown.accommodation;
        totalOther += legResult.breakdown.other;
        breakfastCount += legResult.breakdown.breakfastCount;
        lunchCount += legResult.breakdown.lunchCount;
        dinnerCount += legResult.breakdown.dinnerCount;
        nightCount += legResult.breakdown.nightCount;
        
        currentTime = legArrivalTime;
        
        // If there's a next route, calculate layover DSA
        if (i < routes.length - 1) {
            const nextDepartureTime = routes[i + 1].departureDate;
            const layoverMs = nextDepartureTime - legArrivalTime;
            const layoverHours = layoverMs / (1000 * 60 * 60);
            
            // During layover, use the current destination country's rate
            const layoverResult = calculateSegmentDSA(legArrivalTime, nextDepartureTime, legDestinationPerDiem, gradeMultiplier);
            
            totalDSA += layoverResult.totalDSA;
            totalBreakfast += layoverResult.breakdown.breakfast;
            totalLunch += layoverResult.breakdown.lunch;
            totalDinner += layoverResult.breakdown.dinner;
            totalAccommodation += layoverResult.breakdown.accommodation;
            totalOther += layoverResult.breakdown.other;
            breakfastCount += layoverResult.breakdown.breakfastCount;
            lunchCount += layoverResult.breakdown.lunchCount;
            dinnerCount += layoverResult.breakdown.dinnerCount;
            nightCount += layoverResult.breakdown.nightCount;
            
            totalOutboundHours += layoverHours;
            currentTime = nextDepartureTime;
        }
    }
    
    // Calculate DSA for time at final destination
    const lastDestination = routes[routes.length - 1].to;
    const destinationPerDiem = countryRates[lastDestination];
    const returnStartTime = returnRoutes[0].departureDate;
    
    const timeAtDestinationMs = returnStartTime - currentTime;
    const timeAtDestinationHours = Math.max(0, timeAtDestinationMs / (1000 * 60 * 60));
    
    // Calculate meal-based DSA for destination stay (full days get all meals)
    const destinationResult = calculateDestinationDSA(currentTime, returnStartTime, destinationPerDiem, gradeMultiplier);
    
    totalDSA += destinationResult.totalDSA;
    totalBreakfast += destinationResult.breakdown.breakfast;
    totalLunch += destinationResult.breakdown.lunch;
    totalDinner += destinationResult.breakdown.dinner;
    totalAccommodation += destinationResult.breakdown.accommodation;
    totalOther += destinationResult.breakdown.other;
    breakfastCount += destinationResult.breakdown.breakfastCount;
    lunchCount += destinationResult.breakdown.lunchCount;
    dinnerCount += destinationResult.breakdown.dinnerCount;
    nightCount += destinationResult.breakdown.nightCount;
    
    const daysAtDestination = timeAtDestinationHours / 24;
    
    // Track return journey - DSA based on destination country of each leg
    let totalReturnHours = 0;
    currentTime = returnStartTime;
    
    for (let i = 0; i < returnRoutes.length; i++) {
        const legDepartureTime = returnRoutes[i].departureDate;
        const legArrivalTime = returnRoutes[i].arrivalDate;
        const legDurationMs = legArrivalTime - legDepartureTime;
        const legHours = legDurationMs / (1000 * 60 * 60);
        
        totalReturnHours += legHours;
        
        // Calculate DSA for this return leg using both departure and destination country rates
        const legDeparturePerDiem = countryRates[returnRoutes[i].from];
        const legDestinationPerDiem = countryRates[returnRoutes[i].to];
        const legResult = calculateTravelDSA(legDepartureTime, legArrivalTime, legDeparturePerDiem, legDestinationPerDiem, gradeMultiplier);
        
        totalDSA += legResult.totalDSA;
        totalBreakfast += legResult.breakdown.breakfast;
        totalLunch += legResult.breakdown.lunch;
        totalDinner += legResult.breakdown.dinner;
        totalAccommodation += legResult.breakdown.accommodation;
        totalOther += legResult.breakdown.other;
        breakfastCount += legResult.breakdown.breakfastCount;
        lunchCount += legResult.breakdown.lunchCount;
        dinnerCount += legResult.breakdown.dinnerCount;
        nightCount += legResult.breakdown.nightCount;
        
        currentTime = legArrivalTime;
        
        // If there's a next return route, calculate layover DSA
        if (i < returnRoutes.length - 1) {
            const nextDepartureTime = returnRoutes[i + 1].departureDate;
            const layoverMs = nextDepartureTime - legArrivalTime;
            const layoverHours = layoverMs / (1000 * 60 * 60);
            
            // During layover, use the current destination country's rate
            const layoverResult = calculateSegmentDSA(legArrivalTime, nextDepartureTime, legDestinationPerDiem, gradeMultiplier);
            
            totalDSA += layoverResult.totalDSA;
            totalBreakfast += layoverResult.breakdown.breakfast;
            totalLunch += layoverResult.breakdown.lunch;
            totalDinner += layoverResult.breakdown.dinner;
            totalAccommodation += layoverResult.breakdown.accommodation;
            totalOther += layoverResult.breakdown.other;
            breakfastCount += layoverResult.breakdown.breakfastCount;
            lunchCount += layoverResult.breakdown.lunchCount;
            dinnerCount += layoverResult.breakdown.dinnerCount;
            nightCount += layoverResult.breakdown.nightCount;
            
            totalReturnHours += layoverHours;
            currentTime = nextDepartureTime;
        }
    }
    
    
    // Calculate total duration
    const totalDurationMs = endDate - startDate;
    const totalDurationHours = totalDurationMs / (1000 * 60 * 60);
    const totalDurationDays = totalDurationHours / 24;
    const totalDaysForDSA = totalDurationDays; // Use exact decimal days
    
    // For display purposes
    const fullDaysAtDestination = Math.floor(daysAtDestination);
    const fullDaysTotal = totalDSA;
    const travelDSA = 0; // All DSA is now included in fullDaysTotal
    const travelDays = 0; // For backward compatibility with display
    
    // Calculate DSA breakdown components (for display - using destination per diem)
    const destinationDailyAllowance = destinationPerDiem * gradeMultiplier;
    const dailyAllowance = destinationDailyAllowance;
    const accommodation = (dailyAllowance * dsaComponents.accommodation) / 100;
    const lunch = (dailyAllowance * dsaComponents.lunch) / 100;
    const dinner = (dailyAllowance * dsaComponents.dinner) / 100;
    const breakfast = (dailyAllowance * dsaComponents.breakfast) / 100;
    const otherExpenses = (dailyAllowance * dsaComponents.other) / 100;

    // Calculate representation allowance (percentage of destination per diem base rate)
    // According to Foreign Travel Circular: calculated using base rate × percentage × total days
    let representationAllowance = 0;
    if (representationPercentages[grade] && representationPercentages[grade] > 0) {
        const representationPercentage = representationPercentages[grade];
        representationAllowance = (destinationPerDiem * representationPercentage / 100) * totalDaysForDSA;
    }

    // Calculate supplementary allowance for external funding
    let supplementaryAllowance = 0;
    if (fundingSource === 'external') {
        const daysToCount = Math.min(totalDaysForDSA, 30); // Max 30 days
        supplementaryAllowance = daysToCount * 50; // US$50 per day
    }

    // Calculate total payment
    // Total includes: DSA (fullDaysTotal) + Travel DSA (travelDSA) + Representation Allowance + Supplementary (if external)
    let totalPayment = fullDaysTotal + travelDSA + representationAllowance;
    if (fundingSource === 'external') {
        totalPayment += supplementaryAllowance;
    }

    // Display results
    document.getElementById('purposeDisplay').textContent = purpose;
    document.getElementById('totalDuration').textContent = `${totalDurationDays.toFixed(2)} days (${formatHours(totalDurationHours)})`;
    document.getElementById('outboundTravel').textContent = formatHours(totalOutboundHours);
    document.getElementById('returnTravel').textContent = formatHours(totalReturnHours);
    document.getElementById('fullDays').textContent = `${fullDaysAtDestination} days`;

    // DSA Breakdown (actual totals claimed)
    document.getElementById('accommodation').textContent = `US$${totalAccommodation.toFixed(2)} (${nightCount} nights)`;
    document.getElementById('lunch').textContent = `US$${totalLunch.toFixed(2)} (${lunchCount} meals)`;
    document.getElementById('dinner').textContent = `US$${totalDinner.toFixed(2)} (${dinnerCount} meals)`;
    document.getElementById('breakfast').textContent = `US$${totalBreakfast.toFixed(2)} (${breakfastCount} meals)`;
    document.getElementById('otherExpenses').textContent = `US$${totalOther.toFixed(2)}`;

    document.getElementById('dailyAllowance').textContent = `US$${dailyAllowance.toFixed(2)} (${destinationPerDiem} × ${gradeMultiplier})`;
    document.getElementById('fullDaysTotal').textContent = `US$${fullDaysTotal.toFixed(2)} (Total DSA for ${totalDaysForDSA.toFixed(2)} days)`;

    // Show/hide representation allowance (guard if section exists)
    const representationSection = document.getElementById('representationSection');
    const representationAllowanceEl = document.getElementById('representationAllowance');
    if (representationSection && representationAllowanceEl) {
        if (representationAllowance > 0) {
            representationSection.style.display = 'block';
            representationAllowanceEl.textContent = `US$${representationAllowance.toFixed(2)} (${representationPercentages[grade]}% of base rate)`;
        } else {
            representationSection.style.display = 'none';
        }
    }

    // Show/hide supplementary allowance
    if (fundingSource === 'external') {
        document.getElementById('supplementarySection').style.display = 'block';
        const daysToCount = Math.min(totalDaysForDSA, 30);
        document.getElementById('supplementaryAllowance').textContent = `US$${supplementaryAllowance.toFixed(2)} (${daysToCount.toFixed(2)} days)`;
    } else {
        document.getElementById('supplementarySection').style.display = 'none';
    }

    const totalPaymentInput = document.getElementById('totalPayment');
    if (totalPaymentInput) {
        totalPaymentInput.value = totalPayment.toFixed(2);
    }

    // Generate day-by-day breakdown
    generateDayByDayBreakdown(startDate, endDate, routes, returnRoutes, destinationPerDiem, gradeMultiplier, grade, fundingSource);
    attachAllowanceToggleHandlers();

    // Show results
    document.getElementById('results').style.display = 'block';
    
    // Smooth scroll to results
    document.getElementById('results').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Reset form function
function resetForm() {
    // Reset all input fields
    document.getElementById('grade').value = '';
    document.getElementById('purpose').value = '';
    
    // Clear all country selects and dates
    document.querySelectorAll('.departure-select').forEach(select => select.value = '');
    document.querySelectorAll('.destination-select').forEach(select => select.value = '');
    document.querySelectorAll('.departure-date').forEach(input => input.value = '');
    document.querySelectorAll('.arrival-date').forEach(input => input.value = '');
    document.querySelectorAll('.return-departure-select').forEach(select => select.value = '');
    document.querySelectorAll('.return-destination-select').forEach(select => select.value = '');
    document.querySelectorAll('.return-departure-date').forEach(input => input.value = '');
    document.querySelectorAll('.return-arrival-date').forEach(input => input.value = '');
    
    // Remove all extra outbound route sections (keep only first one)
    const allRoutes = document.querySelectorAll('#routesContainer .route-section');
    allRoutes.forEach((route, index) => {
        if (index > 0) {
            route.remove();
        }
    });
    
    // Remove all extra return route sections (keep only first one)
    const allReturnRoutes = document.querySelectorAll('#returnRoutesContainer .route-section');
    allReturnRoutes.forEach((route, index) => {
        if (index > 0) {
            route.remove();
        }
    });
    
    // Reset counters
    routeCounter = 1;
    returnRouteCounter = 1;
    
    document.getElementById('fundingSource').value = 'government';
    
    // Hide supplementary note
    document.getElementById('supplementaryNote').style.display = 'none';
    
    // Hide results section
    document.getElementById('results').style.display = 'none';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Counter for routes
let routeCounter = 1;
let returnRouteCounter = 1;

// Add new route
function addRoute() {
    const container = document.getElementById('routesContainer');
    const routeId = routeCounter++;
    const routeNumber = routeId + 1;
    
    // Create new route section
    const routeDiv = document.createElement('div');
    routeDiv.className = 'route-section';
    routeDiv.setAttribute('data-route-id', routeId);
    
    // Get all countries for dropdowns
    const countries = Object.keys(countryRates).sort();
    
    // Create dropdown options
    let countryOptions = '<option value="">Select Country</option>';
    countries.forEach(country => {
        countryOptions += `<option value="${country}">${country}</option>`;
    });
    
    routeDiv.innerHTML = `
        <h3 class="route-title">Route ${routeNumber}</h3>
        <button type="button" class="btn-remove-route" onclick="removeRoute(${routeId})" title="Remove this route">
            ×
        </button>
        <div class="form-group">
            <label for="departure-${routeId}">Departure Country:</label>
            <select id="departure-${routeId}" class="departure-select">
                ${countryOptions}
            </select>
        </div>
        <div class="form-group">
            <label for="destination-${routeId}">Destination Country:</label>
            <select id="destination-${routeId}" class="destination-select">
                ${countryOptions}
            </select>
        </div>
        <div class="form-group">
            <label for="perDiem-${routeId}">Per Diem Rate for Destination Country (US$):</label>
            <input type="number" id="perDiem-${routeId}" class="per-diem-display" placeholder="Select destination country" step="0.01" min="0" readonly>
            <small>DSA will be calculated based on this rate</small>
        </div>
        <div class="form-group">
            <label for="departureDate-${routeId}">Departure Date & Time:</label>
            <input type="datetime-local" id="departureDate-${routeId}" class="departure-date">
        </div>
        <div class="form-group">
            <label for="arrivalDate-${routeId}">Arrival Date & Time:</label>
            <input type="datetime-local" id="arrivalDate-${routeId}" class="arrival-date">
        </div>
    `;
    
    container.appendChild(routeDiv);
    
    // Add change listener for the new destination dropdown to update per diem
    const newDestSelect = document.getElementById(`destination-${routeId}`);
    newDestSelect.addEventListener('change', function() {
        updateRoutePerDiem(routeId);
    });
    
    // Set default dates for new route (current time + 3 days)
    const now = new Date();
    const future = new Date(now.getTime() + (3 * 24 * 60 * 60 * 1000));
    document.getElementById(`departureDate-${routeId}`).value = formatDateTime(now);
    document.getElementById(`arrivalDate-${routeId}`).value = formatDateTime(future);
}

// Remove route
function removeRoute(routeId) {
    const routeDiv = document.querySelector(`.route-section[data-route-id="${routeId}"]`);
    if (routeDiv) {
        routeDiv.remove();
        
        // Renumber remaining routes
        const allRoutes = document.querySelectorAll('#routesContainer .route-section');
        allRoutes.forEach((route, index) => {
            const title = route.querySelector('.route-title');
            if (title) {
                title.textContent = `Route ${index + 1}`;
            }
        });
    }
}

// Add new return route
function addReturnRoute() {
    const container = document.getElementById('returnRoutesContainer');
    const routeId = returnRouteCounter++;
    const routeNumber = routeId + 1;
    
    // Create new route section
    const routeDiv = document.createElement('div');
    routeDiv.className = 'route-section';
    routeDiv.setAttribute('data-return-route-id', routeId);
    
    // Get all countries for dropdowns
    const countries = Object.keys(countryRates).sort();
    
    // Create dropdown options
    let countryOptions = '<option value="">Select Country</option>';
    countries.forEach(country => {
        countryOptions += `<option value="${country}">${country}</option>`;
    });
    
    routeDiv.innerHTML = `
        <h3 class="route-title">Return Route ${routeNumber}</h3>
        <button type="button" class="btn-remove-route" onclick="removeReturnRoute(${routeId})" title="Remove this route">
            ×
        </button>
        <div class="form-group">
            <label for="returnDeparture-${routeId}">Return Departure Country:</label>
            <select id="returnDeparture-${routeId}" class="return-departure-select">
                ${countryOptions}
            </select>
        </div>
        <div class="form-group">
            <label for="returnDestination-${routeId}">Return Destination Country:</label>
            <select id="returnDestination-${routeId}" class="return-destination-select">
                ${countryOptions}
            </select>
        </div>
        <div class="form-group">
            <label for="returnPerDiem-${routeId}">Per Diem Rate for Destination Country (US$):</label>
            <input type="number" id="returnPerDiem-${routeId}" class="return-per-diem-display" placeholder="Select destination country" step="0.01" min="0" readonly>
            <small>DSA will be calculated based on this rate</small>
        </div>
        <div class="form-group">
            <label for="returnDepartureDate-${routeId}">Return Departure Date & Time:</label>
            <input type="datetime-local" id="returnDepartureDate-${routeId}" class="return-departure-date">
        </div>
        <div class="form-group">
            <label for="returnArrivalDate-${routeId}">Return Arrival Date & Time:</label>
            <input type="datetime-local" id="returnArrivalDate-${routeId}" class="return-arrival-date">
        </div>
    `;
    
    container.appendChild(routeDiv);
    
    // Add change listener for the new return destination dropdown to update per diem
    const newReturnDestSelect = document.getElementById(`returnDestination-${routeId}`);
    newReturnDestSelect.addEventListener('change', function() {
        updateReturnRoutePerDiem(routeId);
    });
    
    // Set default dates for new route (current time + 6 days)
    const now = new Date();
    const future = new Date(now.getTime() + (6 * 24 * 60 * 60 * 1000));
    document.getElementById(`returnDepartureDate-${routeId}`).value = formatDateTime(now);
    document.getElementById(`returnArrivalDate-${routeId}`).value = formatDateTime(future);
}

// Remove return route
function removeReturnRoute(routeId) {
    const routeDiv = document.querySelector(`.route-section[data-return-route-id="${routeId}"]`);
    if (routeDiv) {
        routeDiv.remove();
        
        // Renumber remaining return routes
        const allReturnRoutes = document.querySelectorAll('#returnRoutesContainer .route-section');
        allReturnRoutes.forEach((route, index) => {
            const title = route.querySelector('.route-title');
            if (title) {
                title.textContent = `Return Route ${index + 1}`;
            }
        });
    }
}

// Format date for datetime-local input
function formatDateTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

// Update per diem for a specific outbound route
function updateRoutePerDiem(routeId) {
    const destinationSelect = document.getElementById(`destination-${routeId}`);
    const perDiemField = document.getElementById(`perDiem-${routeId}`);
    
    if (destinationSelect && perDiemField) {
        const destinationCountry = destinationSelect.value;
        if (destinationCountry && countryRates[destinationCountry]) {
            perDiemField.value = countryRates[destinationCountry];
            alert('perDiemFild.value');
        } else {
            perDiemField.value = '';
        }
    }
}

// Update per diem for a specific return route
function updateReturnRoutePerDiem(routeId) {
    const returnDestinationSelect = document.getElementById(`returnDestination-${routeId}`);
    const returnPerDiemField = document.getElementById(`returnPerDiem-${routeId}`);
    
    if (returnDestinationSelect && returnPerDiemField) {
        const returnDestinationCountry = returnDestinationSelect.value;
        if (returnDestinationCountry && countryRates[returnDestinationCountry]) {
            returnPerDiemField.value = countryRates[returnDestinationCountry];
        } else {
            returnPerDiemField.value = '';
        }
    }
}

// Increment time function
function incrementTime(fieldId, hours) {
    const field = document.getElementById(fieldId);
    
    // Check if field has a value
    if (!field.value) {
        alert('Please set a date and time first');
        return;
    }
    
    // Get current date from field
    const currentDate = new Date(field.value);
    
    // Add hours (in milliseconds)
    currentDate.setTime(currentDate.getTime() + (hours * 60 * 60 * 1000));
    
    // Format back to datetime-local format
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const hoursStr = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    
    field.value = `${year}-${month}-${day}T${hoursStr}:${minutes}`;
}

// Generate day-by-day breakdown
function generateDayByDayBreakdown(startDate, endDate, routes, returnRoutes, perDiemRate, gradeMultiplier, grade, fundingSource) {
    const container = document.getElementById('dayByDayBreakdown');
    container.innerHTML = ''; // Clear previous content
    
    const dailyAllowance = perDiemRate * gradeMultiplier;
    
    // Calculate component rates
    const accommodationRate = (dailyAllowance * dsaComponents.accommodation) / 100;
    const lunchRate = (dailyAllowance * dsaComponents.lunch) / 100;
    const dinnerRate = (dailyAllowance * dsaComponents.dinner) / 100;
    const breakfastRate = (dailyAllowance * dsaComponents.breakfast) / 100;
    const otherRate = (dailyAllowance * dsaComponents.other) / 100;
    
    // Build a timeline of all events
    let timeline = [];
    
    // Add outbound routes
    routes.forEach((route, index) => {
        timeline.push({
            type: 'travel_start',
            time: route.departureDate,
            location: route.from,
            destination: route.to,
            routeIndex: index,
            leg: 'outbound'
        });
        timeline.push({
            type: 'travel_end',
            time: route.arrivalDate,
            location: route.to,
            from: route.from,
            routeIndex: index,
            leg: 'outbound'
        });
    });
    
    // Add return routes
    returnRoutes.forEach((route, index) => {
        timeline.push({
            type: 'travel_start',
            time: route.departureDate,
            location: route.from,
            destination: route.to,
            routeIndex: index,
            leg: 'return'
        });
        timeline.push({
            type: 'travel_end',
            time: route.arrivalDate,
            location: route.to,
            from: route.from,
            routeIndex: index,
            leg: 'return'
        });
    });
    
    // Sort timeline by time
    timeline.sort((a, b) => a.time - b.time);
    
    // Iterate through each day
    let currentDate = new Date(startDate);
    currentDate.setHours(0, 0, 0, 0);
    let dayCounter = 1;
    
    while (currentDate <= endDate) {
        const nextDate = new Date(currentDate);
        nextDate.setDate(nextDate.getDate() + 1);
        
        // Determine location and status for this day
        let dayStatus = 'destination'; // Can be: 'outbound_travel', 'destination', 'return_travel'
        let currentLocation = routes[routes.length - 1].to; // Default to final destination
        
        // Find what's happening on this day
        for (let event of timeline) {
            if (event.time >= currentDate && event.time < nextDate) {
                if (event.type === 'travel_start') {
                    dayStatus = event.leg === 'outbound' ? 'outbound_travel' : 'return_travel';
                    currentLocation = event.location;
                } else if (event.type === 'travel_end') {
                    currentLocation = event.location;
                }
            }
        }
        
        // Calculate allowances for this specific day
        const dayStart = new Date(currentDate);
        dayStart.setHours(0, 0, 0, 0);
        const dayEnd = new Date(currentDate);
        dayEnd.setHours(23, 59, 59, 999);
        
        let allowances = {
            breakfast: { eligible: false, amount: 0 },
            lunch: { eligible: false, amount: 0 },
            dinner: { eligible: false, amount: 0 },
            accommodation: { eligible: false, amount: 0 },
            other: { eligible: false, amount: 0 },
            supplementary: { eligible: false, amount: 0 },
            representation: { eligible: false, amount: 0 }
        };
        
        // Check if this is the first day (departure day)
        if (currentDate.toDateString() === startDate.toDateString()) {
            const depHour = startDate.getHours();
            
            // Breakfast only if depart before 7am
            if (depHour < 7) {
                allowances.breakfast = { eligible: true, amount: breakfastRate };
            }
            
            // Lunch if traveling during lunch period
            if (depHour < 14) {
                allowances.lunch = { eligible: true, amount: lunchRate };
            }
            
            // Dinner if still traveling after 6pm
            allowances.dinner = { eligible: true, amount: dinnerRate };
            
            // Accommodation if overnight travel
            if (currentDate.toDateString() !== endDate.toDateString()) {
                allowances.accommodation = { eligible: true, amount: accommodationRate };
            }
            
            allowances.other = { eligible: true, amount: otherRate };
        }
        // Check if this is the last day (arrival home day)
        else if (currentDate.toDateString() === endDate.toDateString()) {
            const arrHour = endDate.getHours();
            
            // Breakfast if arrive after 7am
            if (arrHour >= 7) {
                allowances.breakfast = { eligible: true, amount: breakfastRate };
            }
            
            // Lunch if arrive after 2pm
            if (arrHour >= 14) {
                allowances.lunch = { eligible: true, amount: lunchRate };
            }
            
            // Dinner unlikely on arrival day unless very late
            if (arrHour >= 18) {
                allowances.dinner = { eligible: true, amount: dinnerRate };
            }
            
            // No accommodation on final return day
            allowances.accommodation = { eligible: false, amount: 0 };
        }
        // Full days at destination or during travel
        else {
            // All meals eligible for full days
            allowances.breakfast = { eligible: true, amount: breakfastRate };
            allowances.lunch = { eligible: true, amount: lunchRate };
            allowances.dinner = { eligible: true, amount: dinnerRate };
            allowances.accommodation = { eligible: true, amount: accommodationRate };
            allowances.other = { eligible: true, amount: otherRate };
        }
        
        // Supplementary allowance for external funding
        if (fundingSource === 'external' && dayCounter <= 30) {
            allowances.supplementary = { eligible: true, amount: 50 };
        }
        
        // Representation allowance
        if (representationPercentages[grade] > 0) {
            const repPercentage = representationPercentages[grade];
            const repAmount = (perDiemRate * repPercentage / 100);
            allowances.representation = { eligible: true, amount: repAmount };
        }
        
        // Calculate day total
        let dayTotal = 0;
        Object.keys(allowances).forEach(key => {
            if (allowances[key].eligible) {
                dayTotal += allowances[key].amount;
            }
        });
        
        // Create day item HTML
        const dayItem = document.createElement('div');
        dayItem.className = 'day-item';
        
        const statusEmoji = dayStatus === 'outbound_travel' ? '✈️ Outbound Travel' : 
                           dayStatus === 'return_travel' ? '✈️ Return Travel' : 
                           '📍 At Destination';
        
        // Format date as dd/mm/yyyy
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const year = currentDate.getFullYear();
        const formattedDate = `${day}/${month}/${year}`;
        
        dayItem.innerHTML = `
            <div class="day-header">
                <span class="day-number">DAY ${dayCounter} - ${formattedDate}</span>
            </div>
            <div class="day-location">${statusEmoji} - ${currentLocation}</div>
            <div class="day-allowances">
                <div class="allowance-item ${allowances.breakfast.eligible ? 'eligible' : 'not-eligible'}" data-amount="${breakfastRate.toFixed(2)}" data-selected="${allowances.breakfast.eligible ? '1' : '0'}">
                    <span class="allowance-label">🍳 Breakfast:</span>
                    <span class="allowance-value">${allowances.breakfast.eligible ? 'US$' + allowances.breakfast.amount.toFixed(2) : 'Not Eligible'}</span>
                </div>
                <div class="allowance-item ${allowances.lunch.eligible ? 'eligible' : 'not-eligible'}" data-amount="${lunchRate.toFixed(2)}" data-selected="${allowances.lunch.eligible ? '1' : '0'}">
                    <span class="allowance-label">🍴 Lunch:</span>
                    <span class="allowance-value">${allowances.lunch.eligible ? 'US$' + allowances.lunch.amount.toFixed(2) : 'Not Eligible'}</span>
                </div>
                <div class="allowance-item ${allowances.dinner.eligible ? 'eligible' : 'not-eligible'}" data-amount="${dinnerRate.toFixed(2)}" data-selected="${allowances.dinner.eligible ? '1' : '0'}">
                    <span class="allowance-label">🍽️ Dinner:</span>
                    <span class="allowance-value">${allowances.dinner.eligible ? 'US$' + allowances.dinner.amount.toFixed(2) : 'Not Eligible'}</span>
                </div>
                <div class="allowance-item ${allowances.accommodation.eligible ? 'eligible' : 'not-eligible'}" data-amount="${accommodationRate.toFixed(2)}" data-selected="${allowances.accommodation.eligible ? '1' : '0'}">
                    <span class="allowance-label">🏨 Accommodation:</span>
                    <span class="allowance-value">${allowances.accommodation.eligible ? 'US$' + allowances.accommodation.amount.toFixed(2) : 'Not Eligible'}</span>
                </div>
                <div class="allowance-item ${allowances.other.eligible ? 'eligible' : 'not-eligible'}" data-amount="${otherRate.toFixed(2)}" data-selected="${allowances.other.eligible ? '1' : '0'}">
                    <span class="allowance-label">💼 Other Expenses:</span>
                    <span class="allowance-value">${allowances.other.eligible ? 'US$' + allowances.other.amount.toFixed(2) : 'Not Eligible'}</span>
                </div>
                ${allowances.supplementary.eligible ? `
                <div class="allowance-item eligible" data-amount="${allowances.supplementary.amount.toFixed(2)}" data-selected="1">
                    <span class="allowance-label">💰 Supplementary:</span>
                    <span class="allowance-value">US$${allowances.supplementary.amount.toFixed(2)}</span>
                </div>` : ''}
                ${allowances.representation.eligible ? `
                <div class="allowance-item eligible" data-amount="${allowances.representation.amount.toFixed(2)}" data-selected="1">
                    <span class="allowance-label">🎩 Representation:</span>
                    <span class="allowance-value">US$${allowances.representation.amount.toFixed(2)}</span>
                </div>` : ''}
            </div>
            <div class="day-total">
                <span>Daily Total:</span>
                <span class="day-total-value">US$${dayTotal.toFixed(2)}</span>
            </div>
        `;
        
        container.appendChild(dayItem);
        
        // Move to next day
        currentDate.setDate(currentDate.getDate() + 1);
        dayCounter++;
    }
}

// Print to PDF function
function printToPDF() {
    window.print();
    
    // Reset everything after printing
    setTimeout(() => {
        resetForm();
    }, 500); // Small delay to ensure print dialog closes first
}

// Toggle handlers for day-by-day allowance items
function attachAllowanceToggleHandlers() {
    const container = document.getElementById('dayByDayBreakdown');
    if (!container) return;

    // Remove previous listener by cloning (simple way to avoid stacking)
    const newContainer = container.cloneNode(true);
    container.parentNode.replaceChild(newContainer, container);

    newContainer.addEventListener('click', function(e) {
        const item = e.target.closest('.allowance-item');
        if (!item) return;

        const amount = parseFloat(item.getAttribute('data-amount') || '0');
        if (!amount || isNaN(amount)) return;

        const valueEl = item.querySelector('.allowance-value');
        const currentlySelected = item.getAttribute('data-selected') === '1';

        if (item.classList.contains('not-eligible')) {
            // Turn into eligible and select
            item.classList.remove('not-eligible', 'excluded');
            item.classList.add('eligible');
            item.setAttribute('data-selected', '1');
            if (valueEl) valueEl.textContent = `US$${amount.toFixed(2)}`;
        } else if (currentlySelected) {
            // Exclude an eligible item
            item.setAttribute('data-selected', '0');
            item.classList.add('excluded');
        } else {
            // Re-include an excluded item
            item.setAttribute('data-selected', '1');
            item.classList.remove('excluded');
        }

        // Update day total shown in this day block
        const dayItem = item.closest('.day-item');
        if (dayItem) {
            const sum = Array.from(dayItem.querySelectorAll('.allowance-item[data-amount]'))
                .reduce((acc, el) => acc + ((el.getAttribute('data-selected') === '1') ? parseFloat(el.getAttribute('data-amount') || '0') : 0), 0);
            const dayTotalEl = dayItem.querySelector('.day-total-value');
            if (dayTotalEl) dayTotalEl.textContent = `US$${sum.toFixed(2)}`;
        }

        // Update overall total payment from all selected items
        recalculateGrandTotalFromSelections();
    });
}

function recalculateGrandTotalFromSelections() {
    const allItems = document.querySelectorAll('.allowance-item[data-amount]');
    let total = 0;
    allItems.forEach(el => {
        if (el.getAttribute('data-selected') === '1') {
            total += parseFloat(el.getAttribute('data-amount') || '0');
        }
    });
    const totalPaymentInput = document.getElementById('totalPayment');
    if (totalPaymentInput) totalPaymentInput.value = total.toFixed(2);
}

// Set default dates (today to 3 days from now)
window.addEventListener('DOMContentLoaded', () => {
    // Populate country dropdowns for first pair
    const countries = Object.keys(countryRates).sort();
    const departureSelect = document.getElementById('departure-0');
    const destinationSelect = document.getElementById('destination-0');
    const returnDepartureSelect = document.getElementById('returnDeparture-0');
    const returnDestinationSelect = document.getElementById('returnDestination-0');
    
    countries.forEach(country => {
        const option1 = document.createElement('option');
        option1.value = country;
        option1.textContent = country;
        departureSelect.appendChild(option1);
        
        const option2 = document.createElement('option');
        option2.value = country;
        option2.textContent = country;
        destinationSelect.appendChild(option2);
        
        const option3 = document.createElement('option');
        option3.value = country;
        option3.textContent = country;
        returnDepartureSelect.appendChild(option3);
        
        const option4 = document.createElement('option');
        option4.value = country;
        option4.textContent = country;
        returnDestinationSelect.appendChild(option4);
    });
    
    // Add event listeners for initial route per diem updates
    destinationSelect.addEventListener('change', function() {
        updateRoutePerDiem(0);
    });
    
    returnDestinationSelect.addEventListener('change', function() {
        updateReturnRoutePerDiem(0);
    });
    
    const now = new Date();
    const futureDate = new Date(now.getTime() + (3 * 24 * 60 * 60 * 1000));
    const returnDepartDate = new Date(now.getTime() + (6 * 24 * 60 * 60 * 1000)); // 6 days later
    const returnArrivalDate = new Date(now.getTime() + (7 * 24 * 60 * 60 * 1000)); // 7 days later

    document.getElementById('departureDate-0').value = formatDateTime(now);
    document.getElementById('arrivalDate-0').value = formatDateTime(futureDate);
    document.getElementById('returnDepartureDate-0').value = formatDateTime(returnDepartDate);
    document.getElementById('returnArrivalDate-0').value = formatDateTime(returnArrivalDate);

    // Show/hide supplementary note based on funding source
    document.getElementById('fundingSource').addEventListener('change', function() {
        if (this.value === 'external') {
            document.getElementById('supplementaryNote').style.display = 'block';
        } else {
            document.getElementById('supplementaryNote').style.display = 'none';
        }
    });

    // Wire up buttons if present
    const calculateBtn = document.getElementById('calculateBtn');
    if (calculateBtn) {
        calculateBtn.addEventListener('click', function(e) {
            e.preventDefault();
            calculate();
        });
    }

    const resetBtn = document.getElementById('resetBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', function(e) {
            e.preventDefault();
            resetForm();
        });
    }

    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', function(e) {
            e.preventDefault();
            printToPDF();
        });
    }
});
