document.addEventListener("DOMContentLoaded", function() {
    const checkmarks = document.querySelectorAll(".checkmark");
  
    checkmarks.forEach(checkmark => {
      checkmark.addEventListener("click", function() {
        // Toggle the checkmark state (e.g., from unchecked to checked)
        const isChecked = this.classList.contains("checked");
        if (isChecked) {
          this.classList.remove("checked");
        } else {
          this.classList.add("checked");
        }
      });
    });
  });