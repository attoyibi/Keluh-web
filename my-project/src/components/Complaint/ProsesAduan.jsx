import React, { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const ProsesAduan = ({ complaintId, refreshProcess }) => {
  const [processes, setProcesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchComplaintProcesses = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const response = await axios.get(
          `https://keluh-dev.mdrizki.my.id/api/v1/complaints/${complaintId}/processes`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const sortedProcesses = response.data.data.sort((a, b) => {
          return new Date(b.updated_at) - new Date(a.updated_at);
        });
        setProcesses(sortedProcesses);
        setLoading(false);
      } catch (error) {
        setError("Gagal mengambil proses aduan.");
        setLoading(false);
      }
    };

    fetchComplaintProcesses();
  }, [complaintId, refreshProcess]);

  const getLastProcess = () => {
    const statusOrder = [
      "Selesai",
      "Ditolak",
      "On Progress",
      "Verifikasi",
      "Pending",
    ];

    for (let i = 0; i < statusOrder.length; i++) {
      const process = processes.find((p) => p.status === statusOrder[i]);
      if (process) {
        return process;
      }
    }

    // Jika tidak ada proses yang sesuai, kembalikan null
    return null;
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const currentProcess = getLastProcess();

  const statusColorMap = {
    Pending: "text-gray-500",
    Verifikasi: "text-blue-500",
    "On Progress": "text-yellow-500",
    Selesai: "text-green-500",
    Ditolak: "text-red-500",
  };

  const iconColorMap = {
    Pending: "bg-gray-500",
    Verifikasi: "bg-blue-500",
    "On Progress": "bg-yellow-500",
    Selesai: "bg-green-500",
    Ditolak: "bg-red-500",
  };

  return (
    <div className="bg-white w-full rounded-2xl py-4 px-5 flex flex-col gap-4">
      <h5 className="font-poppins font-semibold text-2xl">Proses Aduan</h5>
      <section className="flex flex-col">
        <div className="bg-main-color p-4 rounded-md text-white">
          <p>
            No Aduan: <span>{complaintId}</span>
          </p>
        </div>
      </section>
      <div className="w-full flex flex-col">
        {currentProcess ? (
          <div className="flex w-full text-xl flex-col border-b border-gray-200 py-2">
            <div className="flex items-center">
              <span
                className={`h-4 w-4 mr-2 rounded-full ${
                  iconColorMap[currentProcess.status]
                }`}
              ></span>
              <h4
                className={`font-semibold text-lg ${
                  statusColorMap[currentProcess.status]
                }`}
              >
                {currentProcess.status}
              </h4>
            </div>
            <p className="text-gray-500 text-lg">{currentProcess.updated_at}</p>
            <h5 className="font-semibold">
              {currentProcess.admin.name || currentProcess.admin.email}
            </h5>
            <p className="text-gray-700 text-lg">{currentProcess.message}</p>
          </div>
        ) : (
          <div className="text-dark-3 flex justify-center w-full text-xl">
            <p>Belum ada Proses</p>
          </div>
        )}
      </div>
    </div>
  );
};

ProsesAduan.propTypes = {
  complaintId: PropTypes.string.isRequired,
  refreshProcess: PropTypes.bool.isRequired,
};

export default ProsesAduan;
