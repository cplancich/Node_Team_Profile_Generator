const generateHTML = (data) => {
    const generateManager = (manager) => {
        // return HTML template for manager card
        return `\n <div class="card text-white mb-3 mx-5" style="width: 15rem; background-color: #5FBFF9;">
            <h4 class="card-header" style="border-bottom: none;">${manager.name}</h4>
            <h5 class="card-header"><i class="fas fa-glasses"></i>${manager.getRole()}<h5>
                <div class="card">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: <span>${manager.id}</span></li>
                        <li class="list-group-item"> Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                        <li class="list-group-item">Office: <span>${manager.officeNumber}`
    }
    const generateEngineer = (engineer) => {
        // return HTML template for engineer card

    }
    const generateIntern = (intern) => {
        // return HTML template for intern card

    }
    // Final HTML element that collects user data and renders data to page

}