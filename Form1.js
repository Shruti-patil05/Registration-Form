function validateForm() {
   
    document.querySelectorAll('.error').forEach(el => el.textContent = '');


    const fullname = document.getElementById('fullname').value.trim();
    const fullnameParts = fullname.split(' ');
    if (fullnameParts.length < 2 || fullnameParts.length > 3) {
        document.getElementById('fullnameError').textContent = 'Please provide Firstname, Middlename (optional), and Lastname.';
        return false;
    }

 
    const aadhar = document.getElementById('aadhar').value.trim();
    if (!/^\d{12}$/.test(aadhar)) {
        document.getElementById('aadharError').textContent = 'Aadhar must be a 12-digit number.';
        return false;
    }

    const pancard = document.getElementById('pancard').value.trim();
    if (!/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pancard)) {
        document.getElementById('pancardError').textContent = 'PAN Card must follow the format (AAAAA1234A).';
        return false;
    }

    const mobile = document.getElementById('mobile').value.trim();
    if (!/^[6-9]\d{9}$/.test(mobile)) {
        document.getElementById('mobileError').textContent = 'Mobile number must start with 6-9 and be 10 digits.';
        return false;
    }

    const dob = document.getElementById('dob').value.trim();
    if (!dob) {
        document.getElementById('dobError').textContent = 'Please select your Date of Birth.';
        return false;
    }

    const marks = Array.from(document.querySelectorAll('.subject-mark')).map(input => parseFloat(input.value) || 0);
    if (marks.some(mark => mark < 0 || mark > 100)) {
        document.getElementById('marksError').textContent = 'Marks must be between 0 and 100.';
        return false;
    }

    const bestFiveMarks = marks.sort((a, b) => b - a).slice(0, 5);
    const percentage = bestFiveMarks.reduce((sum, mark) => sum + mark, 0) / 5;
    document.getElementById('percentage').value = ${percentage.toFixed(2)}%;

    alert('Form submitted successfully!');
}