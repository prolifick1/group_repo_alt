// import . from 'react-bootstrap'

function SectionHeader(){
//     return (
//         <h1>test test test!</h1>
//     )
// }
console.log('section header component')
    
    return (
        <div>
        <h1>test test test!</h1>
        <div class="row d-flex justify-content-center">
            <div class="col-md-8 col-lg-6">
                    <div class="card">
                    <div class="card-body">
                        <p>Type your note, and hit enter to add it</p>

                        <div class="d-flex justify-content-between">
                        <div class="d-flex flex-row align-items-center">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" width="25"
                            height="25" />
                            <p class="small mb-0 ms-2">Johny</p>
                        </div>
                        <div class="d-flex flex-row align-items-center">
                            <p class="small text-muted mb-0">Upvote?</p>
                            <i class="far fa-thumbs-up ms-2 fa-xs text-black" ></i>
                        </div>
                        </div>
                </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default SectionHeader