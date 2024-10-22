import json
from google.oauth2 import service_account
from googleapiclient.discovery import build

# 使用存储在 Actions Secret 中的密钥
KEY_FILE_LOCATION = "google-analytics-key.json"
VIEW_ID = "G-VN909T72NS"

def initialize_analyticsreporting():
    credentials = service_account.Credentials.from_service_account_file(KEY_FILE_LOCATION)
    analytics = build('analyticsreporting', 'v4', credentials=credentials)
    return analytics

def get_report(analytics):
    return analytics.reports().batchGet(
        body={
            'reportRequests': [
                {
                    'viewId': VIEW_ID,
                    'dateRanges': [{'startDate': '7daysAgo', 'endDate': 'today'}],
                    'metrics': [{'expression': 'ga:pageviews'}],
                }]
        }
    ).execute()

def save_data_to_file(data):
    with open("files/analytics_data.json", "w") as json_file:
        json.dump(data, json_file)

def main():
    analytics = initialize_analyticsreporting()
    response = get_report(analytics)
    save_data_to_file(response)

if __name__ == '__main__':
    main()
