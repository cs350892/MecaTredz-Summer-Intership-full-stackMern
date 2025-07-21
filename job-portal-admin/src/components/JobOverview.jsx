const jobs = [
  { id: 1, title: "Frontend Developer", company: "TechCorp", status: "Open", applications: 25 },
  { id: 2, title: "Backend Engineer", company: "DataSys", status: "Closed", applications: 40 },
  { id: 3, title: "UX Designer", company: "DesignPro", status: "Open", applications: 15 },
  { id: 4, title: "DevOps Engineer", company: "CloudNet", status: "Open", applications: 30 },
];

const JobOverview = () => {
  return (
    <div className="space-y-6">
      {/* Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title">Total Jobs</h3>
            <p className="text-2xl font-bold">120</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title">Active Jobs</h3>
            <p className="text-2xl font-bold">45</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title">Applicants</h3>
            <p className="text-2xl font-bold">1,230</p>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h3 className="card-title">Interviews Scheduled</h3>
            <p className="text-2xl font-bold">89</p>
          </div>
        </div>
      </div>

      {/* Job Listings Table */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h3 className="card-title">Recent Job Listings</h3>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Company</th>
                  <th>Status</th>
                  <th>Applications</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id}>
                    <td>{job.id}</td>
                    <td>{job.title}</td>
                    <td>{job.company}</td>
                    <td>
                      <span className={`badge ${job.status === 'Open' ? 'badge-success' : 'badge-error'}`}>
                        {job.status}
                      </span>
                    </td>
                    <td>{job.applications}</td>
                    <td>
                      <button className="btn btn-ghost btn-sm">View</button>
                      <button className="btn btn-ghost btn-sm">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOverview;