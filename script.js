const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

function submitForm(e){
  e.preventDefault();
  const f = e.target;
  const subject = encodeURIComponent('Website enquiry - MAC URBAN CIVIL CONSTRUCTION');
  const body = encodeURIComponent(
`Name: ${f.name.value}
Company: ${f.company.value}
Phone: ${f.phone.value}
Email: ${f.email.value}
Project type: ${f.project.value}
Project location: ${f.location.value}

Project details:
${f.details.value}`
  );
  window.location.href = `mailto:info@macurbancivil.com.au?subject=${subject}&body=${body}`;
  return false;
}
