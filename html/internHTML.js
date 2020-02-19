  module.exports =` <!-- Intern card -->
  <div class="col-sm-4">
    <!-- Manager Card -->
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">${teamMember[i].name}</div>
        <div class="card-body">
            <h5 class="card-title">NAME</h5>
            <p class="card-text "><span class="fas fa-user-graduate"> </span> Intern</p>

            <ul class="list-group list-group-flush   ">
                <li class="list-group-item text-white bg-dark mb-3 border border-white">ID : <span>${teamMember[i].id}</span>
                </li>
                <li class="list-group-item text-white bg-dark mb-3 border border-white">Email : <span>${teamMember[i].email}</span>
                </li>
                <li class="list-group-item text-white bg-dark mb-3 border border-white">School : <span>${teamMember[i].school}</span></li>
            </ul>


        </div>
    </div>


</div>`;
