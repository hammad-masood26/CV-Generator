generateCV = () => {
    let name = document.getElementById('name').value;
    let fatherName = document.getElementById('fatherName').value;
    let email = document.getElementById('email').value;
    let skills = document.getElementById('skills').value;
    let education = document.getElementById('education').value;

    let nameShow = document.getElementById('nameShow');
    nameShow.innerHTML = "Name: "+name;
    let fatherNameShow = document.getElementById('fatherNameShow');
    fatherNameShow.innerHTML = "Father Name: "+fatherName;
    let emailShow = document.getElementById('emailShow');
    emailShow.innerHTML = "Email: "+email;
    let skillsShow = document.getElementById('skillsShow');
    skillsShow.innerHTML = "Skills: "+skills;
    let educationShow = document.getElementById('educationShow');
    educationShow.innerHTML = "Education: "+education;
}