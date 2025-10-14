import { useMemo, useState } from "react";
import type { CardGridProps, MergedDataProps } from "../../interface/interface";
import styles from "./UserTable.module.scss";
import { LuArrowUpDown } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { useDebounce } from "../../hooks/useDebounce";

const header = [
  {
    id: 1,
    title: "Name",
    icon: <LuArrowUpDown />,
  },

  {
    id: 2,
    title: "Email",
  },
  {
    id: 3,
    title: "Package",
  },
  {
    id: 4,
    title: "Expires On",
  },
  {
    id: 5,
    title: "Status",
  },
  {
    id: 6,
    title: "Action",
  },
];
const UserTable = ({ users, subscriptions }: CardGridProps) => {
  const [selectedUser, setSelectedUser] = useState<MergedDataProps | null>(
    null
  );
  const mergedData: MergedDataProps[] = [];
  subscriptions.forEach((sub) => {
    const user = users.find((user) => Number(user.id) === Number(sub.user_id));
    if (!user) return;
    mergedData.push({
      id: user.id,
      name: `${user.first_name} ${user.middle_name} ${user.last_name}`,
      email: user.email,
      package: sub.package,
      expiresOn: sub.expires_on,
      status: user.active === "1" ? "Active" : "Inactive",
    });
  });

  const handleUserView = (user: MergedDataProps) => {
    setSelectedUser(user);
  };

  // filter logic
  const [inputQuery, setInputQuery] = useState("");
  const search = useDebounce(inputQuery, 300);

  const searchText = search.toLowerCase().trim();
  console.log("searchText:", searchText);

  const filteredData = useMemo(() => {
    const searchText = search.toLowerCase().trim();
    if (searchText === "") return mergedData;
    return mergedData.filter((user) => {
      return (
        user.name.toLowerCase().includes(searchText) ||
        user.email.toLowerCase().includes(searchText) ||
        user.package.toLowerCase().includes(searchText) ||
        user.status.toLowerCase().includes(searchText)
      );
    });
  }, [search, mergedData]);

  console.log("Original data count:", mergedData.length);
  console.log("Filtered data count:", filteredData.length);
  console.log("filter dta", filteredData);
  console.log("Search query:", inputQuery);
  console.log("Debounced search:", search);
  return (
    <>
      <div className={styles.userTable}>
        <div className={styles.tableLayout}>
          <h3>Subscribers</h3>

          <div className={styles.search}>
            <IoSearchOutline fontSize={15} />
            <input
              type="text"
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              placeholder="Search by name, email, package and status"
            />
          </div>

          <table>
            <thead>
              <tr>
                {header.map((item) => (
                  <th key={item.id}>
                    {item.title} {item.icon}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={header.length} style={{ textAlign: "center" }}>
                    No data found
                  </td>
                </tr>
              ) : (
                filteredData.map((user) => {
                  return (
                    <tr key={user.id}>
                      <td style={{ width: "15%" }}>{user.name}</td>
                      <td style={{ width: "35%" }}>{user.email}</td>
                      <td style={{ width: "10%" }}>{user.package}</td>
                      <td style={{ width: "20%" }}>{user.expiresOn}</td>
                      <td style={{ width: "10%" }}>{user.status}</td>
                      <td
                        style={{ width: "10%" }}
                        onClick={() => handleUserView(user)}
                      >
                        <button>View</button>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* User details  */}
      {selectedUser && (
        <div className={styles.userModal}>
          <div className={styles.modalHeader}>
            <h3>User details</h3>

            <div onClick={() => setSelectedUser(null)} className={styles.close}>
              <IoCloseOutline fontSize={20} />
            </div>
          </div>

          <div className={styles.modalBody}>
            {/* user field */}
            <div className={styles.content}>
              <h4>User information</h4>

              <div className={styles.field}>
                <div>
                  <p>User ID</p>
                  <h6>{selectedUser.id}</h6>
                </div>

                <div>
                  <p>Full Name</p>
                  <h6>{selectedUser.name}</h6>
                </div>

                <div>
                  <p>Email</p>
                  <h6>{selectedUser.email}</h6>
                </div>

                <div>
                  <p>Username</p>
                  <h6>{selectedUser.expiresOn}</h6>
                </div>

                <div>
                  <p>Account Status</p>
                  <div
                    style={{
                      background:
                        selectedUser.status === "Active"
                          ? "#ECF9EF"
                          : "#FFEDEC",
                      color:
                        selectedUser.status === "Active"
                          ? "#21c55d"
                          : "#F36160",
                      maxWidth: "fit-content",
                      borderRadius: "4px",
                      padding: "4px 8px",
                    }}
                  >
                    <h6>{selectedUser.status}</h6>
                  </div>
                </div>

                <div>
                  <p>Package</p>
                  <h6>{selectedUser.package}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserTable;
