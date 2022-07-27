window.onload = function() {
  let formElements = document.querySelectorAll('.needs-validation');
  Array.prototype.slice.call(formElements).forEach(form => {
    form.addEventListener('submit', e => {
      if(!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      }

      form.classList.add('was-validated');
    });
  });
}