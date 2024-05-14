document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the "Save changes" button in the modal
    const saveChangesBtn = document.getElementById('saveChangesBtn');

    saveChangesBtn.addEventListener('click', function() {
        // Custom behavior when "Save changes" button is clicked
        alert('Changes have been saved!');
        
        // Close the modal
        $('#exampleModal').modal('hide');
    });
});
