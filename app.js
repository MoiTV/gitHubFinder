// inti
const gitHub = new GitHub;
// init ui
const ui = new UI;
// search input
const searchUser = document.querySelector('#searchUser');

// search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;
    if (userText !== '') {
        // make http call
        gitHub.getUser(userText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // show alert 
                    ui.showAlert('User not found', 'alert alert-danger');
                } else {
                    // show profile
                    ui.showProfile(data.profile);
                }
            })
    } else {
        // clear profile 
        ui.clearProfile();
    }
});