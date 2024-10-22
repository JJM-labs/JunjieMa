import os
import pandas as pd
import itertools

property_id = "G-VN909T72NS"
starting_date = "8daysAgo"
ending_date = "yesterday"

if __name__ == '__main__':
    GOOGLE_APPLICATION_CREDENTIALS = os.environ["GOOGLE_APPLICATION_CREDENTIALS"]

from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (
    DateRange,
    Dimension,
    Metric,
    RunReportRequest,
)
client = BetaAnalyticsDataClient()

request_api = RunReportRequest(
    property=f"properties/{property_id}",
    dimensions=[
        Dimension(name="landingPagePlusQueryString")
        ],
        metrics=[
            Metric(name="sessions")
        ],
        date_ranges=[DateRange(start_date=starting_date, end_date=ending_date)],
    )
response = client.run_report(request_api)

def query_data(api_response):
    dimension_headers = [header.name for header in api_response.dimension_headers]
    metric_headers = [header.name for header in api_response.metric_headers]
    dimensions = []
    metrics = []
    for i in range(len(dimension_headers)):
        dimensions.append([row.dimension_values[i].value for row in api_response.rows])
    dimensions
    for i in range(len(metric_headers)):
        metrics.append([row.metric_values[i].value for row in api_response.rows])
    headers = dimension_headers, metric_headers
    headers = list(itertools.chain.from_iterable(headers))   
    data = dimensions, metrics
    data = list(itertools.chain.from_iterable(data))
    df = pd.DataFrame(data)
    df = df.transpose()
    df.columns = headers
    return df

final_data = query_data(response)
final_data.to_csv('file.csv', index=False)
