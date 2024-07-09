import dayjs from "dayjs";

const findTimeDiff = (time2, daySelected) => {
  const time1 = daySelected.format("HH:mm:ss");
  const t1 = new Date(`1970-01-01T${time1}Z`);
  const t2 = new Date(`1970-01-01T${time2}Z`);
  const diffMs = Math.abs(t1 - t2);
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  //   const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
  console.log(dayjs(daySelected).add(hours, "hour").add(minutes, "minutes"));
  const updatedTime = dayjs(daySelected)
    .add(hours, "hour")
    .add(minutes, "minutes")
    .toISOString();
  return updatedTime;
};

export default findTimeDiff;
