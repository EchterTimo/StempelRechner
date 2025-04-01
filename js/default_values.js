function current_time() {
    // returns string in the format MM:SS
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}`;
}


function set_default_values() {
    const defaultValues = {
        'end_time': current_time(),
    };

    for (const [key, value] of Object.entries(defaultValues)) {
        const inputElement = document.getElementById(key);
        if (inputElement) {
            inputElement.value = value;
        }
    }
}

// Add event listeners to set default values on page load
document.addEventListener('DOMContentLoaded', set_default_values)