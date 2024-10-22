from googleapiclient.discovery import build
from oauth2client.service_account import ServiceAccountCredentials
import json

# 从 JSON 文件加载服务账户密钥
with open('service_account_key.json') as key_file:
    service_account_info = json.load(key_file)

# 定义 API 的范围和凭证
SCOPES = ['https://www.googleapis.com/auth/analytics.readonly']
credentials = ServiceAccountCredentials.from_json_keyfile_dict(
    service_account_info, SCOPES
)

# 构建服务对象
analytics = build('analytics', 'v3', credentials=credentials)

# 获取数据
results = analytics.data().ga().get(
    ids='ga:' + GA_VIEW_ID,
    start_date='7daysAgo',
    end_date='today',
    dimensions='ga:pagePath',
    metrics='ga:pageviews'
).execute()

# 处理结果
for row in results.get('data', {}).get('rows', []):
    print(row['dimensions'][0], row['metrics'][0]['values'][0])

# 可选：将结果保存为 JSON 文件
with open('data/analytics_data.json', 'w') as f:
    json.dump(results, f)
