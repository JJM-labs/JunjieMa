import os
import pandas as pd

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
        Dimension(name="landingPagePath")
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
    
    headers = [item for sublist in zip(dimension_headers, metric_headers) for item in sublist]
    
    data = []
    for row in api_response.rows:
        row_data = []
        for i in range(len(dimension_headers)):
            row_data.append(row.dimension_values[i].value)
        for i in range(len(metric_headers)):
            row_data.append(row.metric_values[i].value)
        data.append(row_data)
    
    df = pd.DataFrame(data, columns=headers)
    return df

final_data = query_data(response)
final_data.to_csv('file.csv', index=False)