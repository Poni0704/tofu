function EditEmployee({userInfo}) {
  const USER_API_BASE_URL = "http://localhost:8080/tofu/employee";
  const [user, setUser] = React.useState(userInfo[0])
  React.useEffect(()=>
  setUser(userInfo[0]),[userInfo])
  let modifiedUserInfo = user
  const handleChange = (event) => {
    const value = event.target.value;
    modifiedUserInfo[event.target.name] = value
  };
  const updateUser = async (e) => {
    e.preventDefault();
    const filteredUser = Object.fromEntries(
      Object.entries(modifiedUserInfo).filter(([key, value]) => key !== "age")
    );
    const response = await fetch(USER_API_BASE_URL + "/edit/" + user.eid, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(filteredUser),
    });
    if (!response.ok) {
      console.log(JSON.stringify(filteredUser));
      throw new Error("Something went wrong");
    }
    const _user = await response.json();
	window.location.href="http://localhost:8080/tofu/employee/all";
  };
  return (
    <div className="modal" id="my-modal">
      <div className="modal-box max-w-none w-5/12" id="journal-scroll">
        <div className="container mx-auto px-14 py-16 flex justify-between">
          <form>
            <div className="space-y-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Profile
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-5">
                <div className="mt-10 grid col-span-3">

                  <div className="sm:col-span-2 mr-6" hidden>
                    <label
                      htmlFor="eid"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      ID
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="eid"
                        id="eid"
                        autoComplete="eid"
                        defaultValue={user.eid}
                        onChange={(e) => handleChange(e)}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 mr-6">
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      First name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        defaultValue={user.firstName}
                        key={user.firstName}
                        onChange={(e) => handleChange(e)}
                        autoComplete="firstName"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Last name
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        defaultValue={user.lastName}
                        key={user.lastName}
                        onChange={(e) => handleChange(e)}
                        autoComplete="lastName"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mt-6 sm:col-span-2 mr-6">
                    <label
                      htmlFor="account"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Account
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="account"
                        id="account"
                        defaultValue={user.account}
                        key={user.account}
                        onChange={(e) => handleChange(e)}
                        autoComplete="account"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mt-6 sm:col-span-2">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        defaultValue={user.password}
                        key={user.password}
                        onChange={(e) => handleChange(e)}
                        autoComplete="password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                  <div className="mt-6 sm:col-span-4">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Phone Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="phone"
                        name="phone"
                        type="text"
                        defaultValue={user.phone}
                        key={user.phone}
                        onChange={(e) => handleChange(e)}
                        autoComplete="phone"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-10 grid col-span-2">
                  <label
                    htmlFor="photoChange"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo
                  </label>
                  <div className="mt-2 flex-wrap justify-center items-center gap-x-3">
                    <img
                      src={
                        "http://localhost:8080/tofu/employee/getEmployeePhoto/" +
                        user.eid
                      }
                    ></img>
                    <button
                      id="photoChange"
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>
                </div>
                <div className="col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      defaultValue={user.email}
                      key={user.email}
                      onChange={(e) => handleChange(e)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="department"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Department
                  </label>
                  <div className="mt-2">
                    <input
                      id="department"
                      name="department"
                      type="text"
                      // autoComplete="department"
                      defaultValue={user.department}
                      key={user.department}
                      onChange={(e) => handleChange(e)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="position"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Position
                  </label>
                  <div className="mt-2">
                    <input
                      id="position"
                      name="position"
                      type="text"
                      autoComplete="position"
                      defaultValue={user.position}
                      key={user.position}
                      onChange={(e) => handleChange(e)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="birthday"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Birthday
                  </label>
                  <div className="mt-2">
                    <input
                      id="birthday"
                      name="birthday"
                      type="date"
                      autoComplete="birthday"
                      defaultValue={user.birthday}
                      key={user.birthday}
                      onChange={(e) => handleChange(e)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="hireDate"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Hire Date
                  </label>
                  <div className="mt-2">
                    <input
                      id="hireDate"
                      name="hireDate"
                      type="date"
                      autoComplete="hireDate"
                      defaultValue={user.hireDate}
                      key={user.hireDate}
                      onChange={(e) => handleChange(e)}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="col-span-2">
                  <fieldset>
                    <legend
            
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Gender
                    </legend>
                    <div className="mt-6 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          id="male"
                          name="gender"
                          type="radio"
                          value="Male"
                          defaultChecked={user.gender === "Male"}
                          key={user.gender === "Male"}
                          onChange={(e) => handleChange(e)}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="male"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Male
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="female"
                          name="gender"
                          type="radio"
                          value="Female"
                          defaultChecked={user.gender === "Female"}
                          key={user.gender === "Female"}
                          onChange={(e) => handleChange(e)}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="female"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Female
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="not-disclosed"
                          name="gender"
                          type="radio"
                          value="Not-disclosed"
                          defaultChecked={user.gender === "Not-disclosed"}
                          key={user.gender === "Not-disclosed"}
                          onChange={(e) => handleChange(e)}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="not-disclosed"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Do not wish to disclose
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="col-span-2" hidden>
                  <fieldset>
                    <legend
            
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Authority
                    </legend>
                    <div className="mt-6 space-y-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          readOnly
                          id="employee"
                          name="authority"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="employee"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Employee
                        </label>
                      </div>

                      <div className="flex items-center gap-x-3">
                        <input
                          id="manager"
                          name="authority"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="manager"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Manager
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="col-span-2" hidden>
                  <label
                    htmlFor="salary"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Salary
                  </label>
                  <div className="mt-2">
                    <input
                      id="salary"
                      name="salary"
                      type="salary"
                      autoComplete="salary"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full" hidden>
                  <legend
               
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cover photo
                  </legend>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-3" hidden>
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>United States</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className="border-b border-gray-900/10 pb-12"></div>

        </div>


        <div className="modal-action">
          <a href="#" className="btn btn-outline btn-primary">
            Cancel
          </a>
          <a href="#" onClick={updateUser} className="btn btn-primary mr-2">
            Save
          </a>
        </div>
      </div>
    </div>


  );
}