from datetime import datetime
from pytz import timezone

fmt = "%Y-%m-%d %H:%M:%S %Z%z"
timezonelist = ['UTC','US/Pacific','Europe/Berlin']

print(dir(datetime))
for zone in timezonelist:

    now_time = datetime.now(timezone(zone))
    print(now_time.strftime(fmt))
date1 = datetime(5,6,5,1,2,3)
date2 = datetime(5,6,7,1,2,4)
print(datetime(5,6,5))
print((date2-date1).seconds)