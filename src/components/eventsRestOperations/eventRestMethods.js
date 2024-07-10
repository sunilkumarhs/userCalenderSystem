export const postEvent = async (event, accessToken) => {
  const formData = new FormData();
  formData.append("title", event.title);
  // formData.append("start", event.start);
  // formData.append("end", event.end);
  // formData.append("emails", event.emails);
  // formData.append("meeting", event.meeting);
  formData.append("description", event.description);
  let url = "http://localhost:8080/goggleEvent/schedule_event_meet";
  let method = "POST";
  try {
    const res = await fetch(url, {
      method: method,
      body: JSON.stringify({
        title: event.title,
        start: event.start,
        end: event.end,
        emails: event.emails,
        meeting: event.meeting,
        description: event.description,
      }),
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    // const res = await fetch(url, {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   mode:"no-cors",
    //   method: method,
    //   body: JSON.stringify({
    //     title:event.title,
    //     description:event.description
    //   }),
    // });
    if (res.status !== 201 && res.status !== 200) {
      const error = new Error("Failed to post the Event!!");
      error.statusCode = res.status;
      throw error;
    }
    console.log(res);
    return res.json();
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
  }
};
