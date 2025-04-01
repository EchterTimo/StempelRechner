
function split_time(time_string) {
    const [hours, minutes] = time_string.split(':').map(Number);
    return { hours, minutes };
}

function time_to_minutes(time_object) {
    const minutes = time_object.minutes;
    const hours = time_object.hours;
    return (hours * 60) + minutes;
}

function minutes_to_time(minutes) {
    const hours = Math.floor(minutes / 60);
    const remaining_minutes = minutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(remaining_minutes).padStart(2, '0')}`;
}

function calculate_time_difference() {
    // Get the input elements for start time, end time, and duration
    const start_time_input = document.getElementById('start_time');
    const end_time_input = document.getElementById('end_time');
    const duration_input = document.getElementById('duration');

    // Get the values from the input elements
    const start_time = split_time(start_time_input.value);
    const end_time = split_time(end_time_input.value);
    
    // Convert start and end times to minutes
    const start_minutes = time_to_minutes(start_time);
    const end_minutes = time_to_minutes(end_time);

    // Calculate the duration in minutes
    const duration_minutes = end_minutes - start_minutes;
    const duration_time_string = minutes_to_time(duration_minutes);

    // If the duration is negative, add 24 hours (1440 minutes) to it
    if (duration_minutes < 0) {
        duration_minutes += 1440; // Add 24 hours in minutes
    }

    // Update the duration input field with the calculated duration
    duration_input.value = duration_time_string;
}

// Add event listeners to recalculate when inputs change
document.getElementById('start_time').addEventListener('change', calculate_time_difference);
document.getElementById('end_time').addEventListener('change', calculate_time_difference);

// Initialize calculation on page load
document.addEventListener('DOMContentLoaded', calculate_time_difference);