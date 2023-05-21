function LeaveForm() {

	const empLeaveEndPoint = 'http://localhost:8080/tofu/employee/leave/leaveCat'
	const myLeaveEndPoint = 'http://localhost:8080/tofu/employee/leave/my_leave_application'

	const [leaveCategory, setLeaveCategory] = React.useState([]);
	const [myLeave, setMyLeave] = React.useState([]);
	const [modalTitle, setModalTitle] = React.useState('請假請求已送出');
	const [modalContent, setModalContent] = React.useState('等待請求回應');
	const [selectedValue, setSelectedValue] = React.useState("default");

	React.useEffect(() => {
		document.querySelector("html").setAttribute("data-theme", "emerald");
	}, []);

	React.useEffect(() => {
		const getLeaveCategory = async () => {
			const { data: res } = await axios.get(empLeaveEndPoint);
			setLeaveCategory(res.map((ele) => {
				if (ele.leaveCategory === '喪假') return <option key={ele.lid} value={ele.lid}>{ele.leaveCategory + ' (' + ele.leaveReason + ')'}</option>
				return <option key={ele.lid} value={ele.lid}>{ele.leaveCategory}</option>
			}))
		};
		getLeaveCategory();
	}, []);

	React.useEffect(() => {
		const getMyLeave = async () => {
			const { data: res } = await axios.get(myLeaveEndPoint);

			setMyLeave(res.map((ele) => {
				return <tr key={ele.aid}>
					<th>{ele.aid}</th>
					<td>{ele.employee.firstName}</td>
					<td>{ele.leave.leaveCategory}</td>		
					<td>{ele.beginDate}</td>
					<td>{ele.endDate}</td>
					<td>{ele.managerApproved !== null ? ele.managerApproved ? '核准' : '駁回' : '等待審核'}</td>
					<td>{ele.createdDate}</td>
				</tr>
			}));
		};
		getMyLeave();
	}, []);

	const [formData, setFormData] = React.useState({
		"leave": {
			"lid": null
		},
		"beginDate": "",
		"endDate": "",
		"leaveReason": "",
		"fileAttached": null
	})

	const [formValue, setFormValue] = React.useState({
		"leave": "",
		"beginDate": "",
		"endDate": "",
		"leaveReason": "",
		"fileAttached": null
	})

	const handleChange = (e) => {
		if (e.target.name === 'category') {
			setFormData({ ...formData, ["leave"]: { "lid": Number(e.target.value) } });
			setFormValue({ ...formValue, [e.target.name]: e.target.value })
			setSelectedValue(e.target.value);

		} else if (e.target.name !== 'category') {
			setFormData({ ...formData, [e.target.name]: e.target.value });
			setFormValue({ ...formValue, [e.target.name]: e.target.value })
		}
	};

	const [responseOnSubmit, setResponseOnSubmit] = React.useState([]);

    const handleReset = () => {
        setFormValue({
                     		"leave": "",
                     		"beginDate": "",
                     		"endDate": "",
                     		"leaveReason": "",
                     		"fileAttached": null
                     	})
        setSelectedValue('default')
    }

	const handleSubmit = async (event) => {
        setFormValue({
                            "leave": "",
                            "beginDate": "",
                            "endDate": "",
                            "leaveReason": "",
                            "fileAttached": null
                        })
	    setSelectedValue("default");
		event.preventDefault();
        document.getElementById('my-modal').checked = true;
		try {
			let { data: submitData } = await axios.post('http://localhost:8080/tofu/employee/leave/application', formData)
            setModalTitle(submitData.submitResult==='您已成功提交請假申請。' ? '提交成功' : '提交失敗');
            setModalContent(submitData.submitResult);

            setFormData([])

			const { data: res } = await axios.get(myLeaveEndPoint);
			setMyLeave(res.map((ele) => {
				return <tr key={ele.aid}>
					<th>{ele.aid}</th>
					<td>{ele.employee.firstName}</td>
					<td>{ele.leave.leaveCategory}</td>
					<td>{ele.beginDate}</td>
					<td>{ele.endDate}</td>
					<td>{ele.managerApproved !== null ? ele.managerApproved ? '核准' : '駁回' : '等待審核'}</td>
					<td>{ele.createdDate}</td>
				</tr>
			}));

		} catch (error) {
            setModalTitle('');
            setModalContent('請檢查是否有漏填欄位。');

			console.error(error);
            setFormData([])
		}
	}

	const myinfo_API_BASE_URL = "http://localhost:8080/tofu/info/employee/";
	const EMP_API_BASE_URL = "http://localhost:8080/tofu/employee/";
	const [myinfo, setMyinfo] = React.useState([]);

	const [waitforassign, setWaitforassign] = React.useState([]);
	const [bookdata, setBookdata] = React.useState([]);
	const [clist, setClist] = React.useState([]);
	const [plist, setPlist] = React.useState([]);

	React.useEffect(() => {
		const getLoggedinInfo = async () => {
			const { data: myinfo } = await axios.get(EMP_API_BASE_URL + "leave/my_info");
			setMyinfo(myinfo);
		};
		getLoggedinInfo();
	}, []);

	React.useEffect(() => {
		const getTasksNumber = async () => {
			const { data: countWaitingAssign } = await axios.get(EMP_API_BASE_URL + "task/waiting_assign");
			setWaitforassign(countWaitingAssign);
		};
		getTasksNumber();
	}, []);

	React.useEffect(() => {
		const getWaitingBooks = async () => {
			const { data: booklist } = await axios.get(EMP_API_BASE_URL + "task/booklist");
			setBookdata(booklist.reverse());
		};
		getWaitingBooks();
	}, []);

	React.useEffect(() => {
		const getCusList = async () => {
			const { data: cuslist } = await axios.get(EMP_API_BASE_URL + "task/customerlist");
			setClist(cuslist);
		};
		getCusList();
	}, []);

	function getTheCusName(cid) {
        const customer = clist.find((cus) => {
            return (cus.customer_id === cid);
        });
        return (customer.name);
    }

	React.useEffect(() => {
		const getProductList = async () => {
			const { data: productlist } = await axios.get(EMP_API_BASE_URL + "task/productlist");
			setPlist(productlist);
		};
		getProductList();
	}, []);

	function getTheProductName(pid) {
        const product = plist.find((pro) => {
            return (pro.productId === pid);
        });
        return (product.productModel);
    }

	return (
		<>
			<div className="container mx-auto px-14 py-16 flex justify-between">
				<Sidebar />
				<div className="flex-wrap justify-center w-full w-4/5">
					<div className="flex justify-between">
						<p className="text-2xl my-6">請假申請</p>
					</div>
					<div className="overflow-x-auto">

						<div className="container mx-auto flex justify-center">

							<form onSubmit={handleSubmit} encType="multipart/form-data">
								<div className="space-y-12">
									<div className="border-b border-gray-900/10 pb-12" hidden></div>
									<h2 className="text-xl font-semibold leading-7 text-gray-900" hidden>
										Profile
									</h2>
									<p className="mt-1 text-sm leading-6 text-gray-600" hidden>
										This information will be displayed publicly so be careful what
										you share.
									</p>

									<div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">

										<div className="mr-6">
											<label
												htmlFor="eid"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												員工編號
											</label>
											<div className="mt-2">
												<input
													disabled={true}
													type="text"
													id="eid"
													autoComplete="eid"
													defaultValue={myinfo.eid}
													onChange={(e) => handleChange(e)}
													className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>

										<div className="mr-6">
											<label
												htmlFor="firstName"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												名字
											</label>
											<div className="mt-2">
												<input
													disabled={true}
													type="text"
													id="firstName"
													defaultValue={myinfo.firstName}
													key={myinfo.firstName}
													onChange={(e) => handleChange(e)}
													autoComplete="firstName"
													className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>

										<div className="sm:col-span-2" hidden>
											<label
												htmlFor="lastName"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												Last name
											</label>
											<div className="mt-2">
												<input
													disabled={true}
													type="text"
													id="lastName"
													defaultValue={myinfo.lastName}
													key={myinfo.lastName}
													onChange={(e) => handleChange(e)}
													autoComplete="lastName"
													className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>

										<div className="col-span-2">
											<label
												htmlFor="position"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												職位
											</label>
											<div className="mt-2">
												<input
													disabled={true}
													id="position"
													type="text"
													autoComplete="position"
													defaultValue={myinfo.position}
													key={myinfo.position}
													onChange={(e) => handleChange(e)}
													className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
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
													disabled={true}
													id="email"
													type="email"
													autoComplete="email"
													defaultValue={myinfo.email}
													key={myinfo.email}
													onChange={(e) => handleChange(e)}
													className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>

										<div className="mr-6">
											<label
												htmlFor="category"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												假別
											</label>
											<div className="mt-2">
												<select
													id="category"
													name="category"
													required="required"
													autoComplete="country-name"
													onChange={(e) => handleChange(e)}
                                                    value={selectedValue}
													className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
												>
                                                    <option value="default" disabled selected>
                                                        請選擇假別
                                                    </option>
												    {leaveCategory}
												</select>
											</div>
										</div>

										<div className="mr-6">
											<label
												htmlFor="beginDate"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												開始日期
											</label>
											<div className="mt-2">
												<input
													id="beginDate"
													name="beginDate"
													type="date"
													required="required"
													autoComplete="beginDate"
													onChange={(e) => handleChange(e)}
													value={formValue.beginDate}
													className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>

										<div className="sm:col-span-2">
											<label
												htmlFor="endDate"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												結束日期
											</label>
											<div className="mt-2">
												<input
													id="endDate"
													name="endDate"
													type="date"
													required="required"
													autoComplete="endDate"
													onChange={(e) => handleChange(e)}
													value={formValue.endDate}
													className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>

										<div className="col-span-4">
											<label
												htmlFor="reason"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												請假事由
											</label>
											<div className="mt-2">
												<input
													id="reason"
													name="leaveReason"
													type="text"
													// autoComplete="department"
													onChange={(e) => handleChange(e)}
													value={formValue.leaveReason}
													className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
												/>
											</div>
										</div>

										<div className="col-span-4">
											<label
												htmlFor="attachedFile"
												className="block text-sm font-medium leading-6 text-gray-900"
											>
												附件
											</label>
											<div className="mt-2">
												<input
													id="attachedFile"
													name="attachedFile"
													type="file"
													onChange={(e) => handleChange(e)}
													className="file-input file-input-bordered file-input-md w-full max-w-xs"
												/>
											</div>
											<div className="modal-action gap-x-2">
												<button onClick={handleReset} className="btn btn-outline btn-primary">
													Reset
												</button>

                                                    <button onClick={handleSubmit} className="btn btn-primary">
                                                        Save
                                                    </button>

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
									</div>

								</div>
							</form>
							<div className="border-b border-gray-900/10 pb-12"></div>
						</div>
						<div className="container mx-auto justify-between">
							<div className="flex justify-between">
								<p className="text-2xl my-6">假單狀態查詢</p>
							</div>
							<table className="table table-zebra w-full">
								<thead>
									<tr>
										<th></th>
										<th>名字</th>
										<th>假別</th>
										<th>起始日期</th>
										<th>結束日期</th>
										<th>狀態</th>
										<th>提交時間</th>
									</tr>
								</thead>
								<tbody>
									{myLeave}
								</tbody>
							</table>

						</div>
					</div>
				</div>
			</div>
			<input type="checkbox" id="my-modal"  className="modal-toggle" />
            <label htmlFor="my-modal" className="modal cursor-pointer">
              <label className="modal-box relative" htmlFor="">
                <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <h3 className="text-lg font-bold">{modalTitle}</h3>
                <p className="py-4">{modalContent}</p>
              </label>
            </label>
		</>

	);
}
