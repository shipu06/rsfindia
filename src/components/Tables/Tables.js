import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";
import user1 from "@/images/users/user1.jpg";
import user2 from "../../assets/images/users/user2.jpg";
import user3 from "../../assets/images/users/user3.jpg";
import user4 from "../../assets/images/users/user4.jpg";
import user5 from "../../assets/images/users/user5.jpg";
import TablePagination from "../Pagination/Pagination";
import moment from 'moment';


const tableData = [
  {
    avatar: 'user1.jpg',
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Lading pro React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Elite React",
    status: "holt",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: 'user1.jpg',
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user2,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Lading pro React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user3,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Elite React",
    status: "holt",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user4,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Flexy React",
    status: "pending",
    weeks: "35",
    budget: "95K",
  },
  {
    avatar: user5,
    name: "Hanna Gover",
    email: "hgover@gmail.com",
    project: "Ample React",
    status: "done",
    weeks: "35",
    budget: "95K",
  },
];

const Tables = ({data, headers, type}) => {
  return (
    <div style={{margin: '10px 0px'}}>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Project Listing</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Overview of the projects
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
              {
               headers &&  headers.map((item, key) => (<th key = {key}>{item}</th>))
              }
                
              </tr>
            </thead>
            <tbody>
              { data && data.map((item, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2 ">
                      {/* <img
                        src={user1}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      /> */}
                      <div className="rounded-circle border border-dark d-flex align-items-center justify-content-center" style={{width: '40px', height: '40px'}}><span>A</span></div>
                      <div className="ms-3">
                        <h6 className="mb-0">{type === 'donation' && item?.user.name}</h6>
                        <span className="text-muted">{type === 'donation' && item?.user.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{type === 'donation' && item?.cause}</td>
                  {/* <td>
                    {tdata.status === "pending" ? (
                      <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "holt" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td> */}
                  <td>{type === 'donation' && moment(item?.date).format('DD/MM/YYYY')}</td>
                  <td>{type === 'donation' && item?.amount}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <TablePagination />
        </CardBody>
      </Card>
    </div>
  );
};

export default Tables;
