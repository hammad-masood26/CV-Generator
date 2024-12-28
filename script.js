function generateCV() {
    let name = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;
    let email = document.getElementById('email').value;
    let skills = document.getElementById('skills').value;
    let education = document.getElementById('education').value;
    let experience = document.getElementById('experience').value;
    let hobbies = document.getElementById('hobbies').value;
    let references = document.getElementById('references').value;

    let selectedDesign = document.getElementById('design').value;

    let cvContainer = document.getElementById('cvContainer');
    cvContainer.className = selectedDesign;

    document.getElementById('nameShow').innerHTML = `<strong>Name:</strong> ${name}`;
    document.getElementById('contactShow').innerHTML = `<strong>Contact:</strong> ${contact}`;
    document.getElementById('emailShow').innerHTML = `<strong>Email:</strong> ${email}`;
    document.getElementById('skillsShow').innerHTML = `<strong>Skills:</strong> ${skills}`;
    document.getElementById('educationShow').innerHTML = `<strong>Education:</strong> ${education}`;
    document.getElementById('experienceShow').innerHTML = `<strong>Work Experience:</strong> ${experience}`;
    document.getElementById('hobbiesShow').innerHTML = `<strong>Hobbies:</strong> ${hobbies}`;
    document.getElementById('referencesShow').innerHTML = `<strong>References:</strong> ${references}`;
}
