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
  const [selectedUser, setSelectedUser] = useState<{
    user: any;
    subscription: any;
  } | null>(null);

  // Enhanced users with subscription data
  const enhancedUsers = useMemo(() => {
    return users.map((user) => {
      const subscription = subscriptions.find(
        (sub) => sub.user_id.toString() === user.id.toString()
      );

      return {
        ...user,
        subscription: subscription || null,
        package: subscription?.package || "No Package",
        expiresOn: subscription?.expires_on || "N/A",
        status: user.active === "1" ? "Active" : "Inactive",
        fullName:
          `${user.first_name} ${user.middle_name} ${user.last_name}`.trim(),
      };
    });
  }, [users, subscriptions]);

  const [inputQuery, setInputQuery] = useState("");
  const search = useDebounce(inputQuery, 300);

  const filteredUsers = useMemo(() => {
    const searchText = search.toLowerCase().trim();

    if (!searchText) return enhancedUsers;

    return enhancedUsers.filter((user) => {
      return (
        user.fullName.toLowerCase().includes(searchText) ||
        user.email.toLowerCase().includes(searchText) ||
        user.package.toLowerCase().includes(searchText) ||
        user.status.toLowerCase().includes(searchText)
      );
    });
  }, [enhancedUsers, search]);

  const handleUserView = (user: any) => {
    setSelectedUser({
      user: user,
      subscription: user.subscription,
    });
  };

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

          <div className={styles.tableContainer}>
            <table>
              <thead>
                <tr>
                  <th>
                    Full Name <LuArrowUpDown />
                  </th>
                  <th>Email</th>
                  <th>Package</th>
                  <th>Expires On</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredUsers.length === 0 ? (
                  <tr>
                    <td colSpan={header.length} style={{ textAlign: "center" }}>
                      No data found
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td style={{ width: "15%" }}>{user.fullName}</td>
                        <td style={{ width: "35%" }}>{user.email}</td>
                        <td style={{ width: "10%" }}>{user.package}</td>
                        <td style={{ width: "20%" }}>{user.expiresOn}</td>
                        <td style={{ width: "10%" }}>
                          <div
                            style={{
                              borderRadius: "8px",
                              padding: "4px 8px",
                              maxWidth: "fit-content",
                              background:
                                user.status === "Active"
                                  ? "#ECF9EF"
                                  : "#FFEDEC",
                              color:
                                user.status === "Active"
                                  ? "#21c55d"
                                  : "#F36160",
                            }}
                          >
                            {user.status}
                          </div>
                        </td>
                        <td style={{ width: "10%" }}>
                          <button
                            className={styles.btn}
                            onClick={() => handleUserView(user)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Enhanced User Details Modal with Subscription Info */}
      {selectedUser && (
        <div className={styles.userModal}>
          <div className={styles.modalHeader}>
            <h3>User Details</h3>
            <div onClick={() => setSelectedUser(null)} className={styles.close}>
              <IoCloseOutline fontSize={20} />
            </div>
          </div>

          <div className={styles.modalBody}>
            {/* User Information Section */}
            <div className={styles.content}>
              <h4>User Information</h4>
              <div className={styles.field}>
                <div>
                  <p>User ID</p>
                  <h6>{selectedUser.user.id}</h6>
                </div>
                <div>
                  <p>Full Name</p>
                  <h6>{selectedUser.user.fullName}</h6>
                </div>
                <div>
                  <p>Email</p>
                  <h6>{selectedUser.user.email}</h6>
                </div>
                <div>
                  <p>Username</p>
                  <h6>{selectedUser.user.username}</h6>
                </div>
                <div>
                  <p>Address</p>
                  <h6>{selectedUser.user.address}</h6>
                </div>
                <div>
                  <p>Country</p>
                  <h6>{selectedUser.user.country}</h6>
                </div>
                <div>
                  <p>Join Date</p>
                  <h6>{selectedUser.user.join_date}</h6>
                </div>
                <div>
                  <p>Account Status</p>
                  <div
                    style={{
                      background:
                        selectedUser.user.status === "Active"
                          ? "#ECF9EF"
                          : "#FFEDEC",
                      color:
                        selectedUser.user.status === "Active"
                          ? "#21c55d"
                          : "#F36160",
                      maxWidth: "fit-content",
                      borderRadius: "4px",
                      padding: "4px 8px",
                    }}
                  >
                    <h6>{selectedUser.user.status}</h6>
                  </div>
                </div>
              </div>
            </div>

            {/* Subscription Information Section */}
            {selectedUser.subscription ? (
              <div className={styles.content} style={{ marginTop: "20px" }}>
                <h4>Subscription Information</h4>
                <div className={styles.field}>
                  <div>
                    <p>Subscription ID</p>
                    <h6>{selectedUser.subscription.id}</h6>
                  </div>
                  <div>
                    <p>Package</p>
                    <h6>{selectedUser.subscription.package}</h6>
                  </div>
                  <div>
                    <p>Expires On</p>
                    <h6>{selectedUser.subscription.expires_on}</h6>
                  </div>
                  <div>
                    <p>Subscription Status</p>
                    <div
                      style={{
                        background:
                          selectedUser.user.status === "Active"
                            ? "#ECF9EF"
                            : "#FFEDEC",
                        color:
                          selectedUser.user.status === "Active"
                            ? "#21c55d"
                            : "#F36160",
                        maxWidth: "fit-content",
                        borderRadius: "4px",
                        padding: "4px 8px",
                      }}
                    >
                      <h6>
                        {selectedUser.user.status === "Active"
                          ? "Active"
                          : "Expired"}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.content} style={{ marginTop: "20px" }}>
                <h4>Subscription Information</h4>
                <div className={styles.field}>
                  <div>
                    <p style={{ color: "#6c757d", fontStyle: "italic" }}>
                      No subscription found for this user
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UserTable;
