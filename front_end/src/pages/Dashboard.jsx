import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import NavBar from "../components/NavBar";
import {
  MDBBtn,
  MDBInput,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBIcon,
  MDBBadge,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdbreact";
import Board from "react-trello";
import AddButton from "../components/AddButton";
import AddJobModal from "../components/AddJobModal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Dashboard(props) {
  const [companyName, setCompanyName] = useState("");
  const [companyLink, setCompanyLink] = useState("");
  const [jobTitle, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [activeCard, setActiveCard] = useState(null);
  // const [cardToChange, setCardToChange] = useState(null)
  const [cardModalIsOpen, setCardModalIsOpen] = useState(false);

  // sets state of current jobs to empty list
  const [currentJobs, setCurrentJobs] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [interviewedJobs, setInterviewedJobs] = useState([]);
  const [offerJobs, setOfferJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState({})

  const [lgShow, setLgShow] = useState(false);
  const [smShow, setSmShow] = useState(false);

  const [modal, setModal] = useState(false);
  const [addedJob, setAddedJob] = useState(false);

  let data = {
    lanes: [
      {
        id: "lane1",
        title: "Interested",
        label: currentJobs.length,
        cards: currentJobs,
        disallowAddingCard: true,
      },
      {
        id: "lane2",
        title: "Applied",
        label: appliedJobs.length,
        cards: appliedJobs,
        disallowAddingCard: true,
      },
      {
        id: "lane3",
        title: "Interview Scheduled",
        label: interviewedJobs.length,
        cards: interviewedJobs,
        disallowAddingCard: true,
      },
      {
        id: "lane4",
        title: "Received Offer",
        label: offerJobs.length,
        cards: offerJobs,
        disallowAddingCard: true,
      },
    ],
  };

  //sets state of current jobs to current list based on back end request
  const getJobs = () => {
    axios.get("jobsInterested").then((response) => {
      setCurrentJobs(
        response.data.map((job) => {
          return {
            id: job.id,
            title: job.company_name,
            description: job.job_title,
            salary: job.salary,
            location: job.location,
            label: (
              <a href={job.company_link} target="_blank">
                <button type="button" class="btn-sm btn-primary btn-rounded">
                  apply
                </button>
              </a>
            ),
            draggable: true,
          }
        })
      )
    }
    );
  }

  const getAppliedJobs = () => {
    axios.get("jobsApplied").then((response) => {
      setAppliedJobs(
        response.data.map(aj => {
          return {
            id: aj.id,
            title: aj.company_name,
            description: aj.job_title,
            salary: aj.salary,
            location: aj.location,
            draggable: true,
          }
        })
      )
    })
  }

  const getInterviewedJobs = () => {
    axios.get("jobsInterviewed").then((response) => {
      setInterviewedJobs(
        response.data.map(ij => {
          return {
            id: ij.id,
            title: ij.company_name,
            description: ij.job_title,
            salary: ij.salary,
            location: ij.location,
            draggable: true,
          }
        }
        )
      )
    })
  }

  const getOfferJobs = () => {
    axios.get("jobsOffered").then((response) => {
      setOfferJobs(
        response.data.map(oj => {
          return {
            id: oj.id,
            title: oj.company_name,
            description: oj.job_title,
            salary: oj.salary,
            location: oj.location,
            draggable: true,
          }
        }
        )
      )
    })
  }

  const reset = () => {
    getJobs();
    getAppliedJobs()
    getInterviewedJobs()
    getOfferJobs()
  }

  useEffect(() => {
    reset()
  }, []);

  useEffect(() => {
    getOfferJobs()
  }, [addedJob])

  const updateData = () => {
    data = {
      lanes: [
        {
          id: "lane1",
          title: "Interested",
          label: currentJobs.length,
          cards: currentJobs,
          disallowAddingCard: true,
        },
        {
          id: "lane2",
          title: "Applied",
          label: appliedJobs.length,
          cards: appliedJobs,
          disallowAddingCard: true,
        },
        {
          id: "lane3",
          title: "Interview Scheduled",
          label: interviewedJobs.length,
          cards: interviewedJobs,
          disallowAddingCard: true,
        },
        {
          id: "lane4",
          title: "Received Offer",
          label: offerJobs.length,
          cards: offerJobs,
          disallowAddingCard: true,
        },
      ],
    }
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  const toggleCardModal = () => {
    setLgShow(!lgShow);
  };

  const components = {
    LaneFooter: function noRefCheck() { },
  };

  const onCardClick = (cardId, metadata, laneId) => {
    setActiveCard(cardId);
    let curr
    axios.get('jobs').then(res => {
      curr = res.data.filter(item => item.id == cardId)
      setSelectedJob(curr[0])
      setCardModalIsOpen(!cardModalIsOpen);
      toggleCardModal();
    })
  };

  const deleteJob = (jobId) => {
    axios
      .delete(`jobs/${jobId}`)
      .then(setCurrentJobs(currentJobs.filter((job) => job.id != jobId)))
  };

  const editJob = () => {
    console.log(document.querySelector('#eDate').value)
    let jobToEdit = {
      company_name: companyName,
      job_title: jobTitle,
      salary: salary,
      location: location,
      date: date,
      interview_scheduled: false,
      job_offer: false,
      completed: false,
    };

    axios.put(`jobs/${activeCard}`, jobToEdit).then((response) => {
      getJobs();
    });
  };

  const onCardMoveAcrossLanes = (fromLaneId, toLaneId, cardId, index) => {
    let cardToChange
    axios.get('jobs').then(res => {
      cardToChange = res.data.filter((job) => job.id == cardId)
      if (toLaneId === "lane1") {
        let interestedJob = {
          company_name: cardToChange[0]["company_name"],
          job_title: cardToChange[0]["job_title"],
          salary: cardToChange[0]["salary"],
          location: cardToChange[0]["location"],
          interview_scheduled: false,
          job_offer: false,
          completed: false,
        };
        axios.put(`cardjobs/${cardId}`, interestedJob)
          .then((response) => {
            console.log(response.data["msg"])
            reset()
            updateData()
          });
      }
      else if (toLaneId === "lane2") {
        let appliedJob = {
          company_name: cardToChange[0]["company_name"],
          job_title: cardToChange[0]["job_title"],
          salary: cardToChange[0]["salary"],
          location: cardToChange[0]["location"],
          interview_scheduled: false,
          job_offer: false,
          completed: true,
        };
        axios.put(`cardjobs/${cardId}`, appliedJob)
          .then((response) => {
            console.log(response.data["msg"])
            reset()
            updateData()
          });
      } else if (toLaneId === "lane3") {
        let interviewJob = {
          company_name: cardToChange[0]["company_name"],
          job_title: cardToChange[0]["job_title"],
          salary: cardToChange[0]["salary"],
          location: cardToChange[0]["location"],
          interview_scheduled: true,
          job_offer: false,
          completed: true,
        };
        axios.put(`cardjobs/${cardId}`, interviewJob)
          .then((response) => {
            console.log(response.data["msg"])
            reset()
            updateData()
          });
      } else if (toLaneId === "lane4") {
        let jobOffer = {
          company_name: cardToChange[0]["company_name"],
          job_title: cardToChange[0]["job_title"],
          salary: cardToChange[0]["salary"],
          location: cardToChange[0]["location"],
          interview_scheduled: true,
          job_offer: true,
          completed: true,
        };
        axios.put(`cardjobs/${cardId}`, jobOffer)
          .then((response) => {
            console.log(response.data["msg"])
            reset()
            updateData()
          });
      }
    })
  };

  return (
    <div>
      <>
        <Modal
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              Small Modal
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>...</Modal.Body>
        </Modal>
        <Modal
          size="lg"
          show={lgShow}
          onHide={() => setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Additional Information
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <MDBModalBody>
              <form
                className="mx-3 grey-text"
                onSubmit={(e) => {
                  e.preventDefault();
                  toggleCardModal();
                  editJob();
                }}
              >
                <MDBInput
                  type="text"
                  id="eCompany"
                  label="Company"
                  // value={selectedJob.company_name || ""}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <MDBInput
                  type="text"
                  label="Title"
                  id="eTitle"
                  // value={selectedJob.job_title || ""}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <MDBInput
                  type="text"
                  label="Salary"
                  id="eSalary"
                  // value={selectedJob.salary || ""}
                  onChange={(e) => setSalary(e.target.value)}
                />
                <MDBInput
                  type="text"
                  label="Location"
                  id="eLocation"
                  // value={selectedJob.location || ""}
                  onChange={(e) => setLocation(e.target.value)}
                />
                <MDBInput
                  type="text"
                  label="Date Applied"
                  id="eDate"
                  // value={selectedJob.date_completed || ""}
                  onChange={(e) => setDate(e.target.value)}
                />
                <MDBBtn color="info" type="submit">
                  Save
                </MDBBtn>
              </form>
            </MDBModalBody>
          </Modal.Body>
        </Modal>
      </>
      <React.Fragment>
        <NavBar />
        <AddButton toggleModal={toggleModal} />
        <AddJobModal
          getJobs={getJobs}
          modal={modal}
          toggleModal={toggleModal}
          companyName={companyName}
          jobTitle={jobTitle}
          description={description}
          companyLink={companyLink}
          setCompanyLink={setCompanyLink}
          setCompanyName={setCompanyName}
          setDescription={setDescription}
          setTitle={setTitle}
          setAddedJob={setAddedJob}
          addedJob={addedJob}
        />
        <Board
          components={components}
          data={data}
          style={{ backgroundColor: "white" }}
          editable
          id="EditableBoard1"
          onCardClick={onCardClick}
          onCardDelete={deleteJob}
          onCardMoveAcrossLanes={onCardMoveAcrossLanes}
        ></Board>
      </React.Fragment>
    </div>
  );
}

export default Dashboard;
