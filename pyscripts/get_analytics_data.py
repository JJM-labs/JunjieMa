import json
import os
from google.oauth2 import service_account
from googleapiclient.discovery import build

def initialize_analyticsreporting():
    # 从环境变量获取 Google Analytics 密钥
    key_json = os.getenv("GOOGLE_ANALYTICS_KEY")
    
    if not key_json:
        raise ValueError("环境变量 GOOGLE_ANALYTICS_KEY 未设置")
    
    # 将 JSON 字符串转换为字典
    credentials_info = json.loads(key_json)
    
    # 使用服务账号凭证初始化
    credentials = service_account.Credentials.from_service_account_info(credentials_info)

    # 构建 Google Analytics 服务
    analytics = build('analyticsreporting', 'v4', credentials=credentials)
    return analytics

def get_report(analytics):
    # 设置请求体
    body = {
        'reportRequests': [
            {
                'viewId': 'G-VN909T72NS',  # 替换为你的 View ID
                'dateRanges': [
                    {
                        'startDate': '7daysAgo',
                        'endDate': 'today'
                    }
                ],
                'metrics': [
                    {
                        'expression': 'ga:sessions'  # 可以替换为你需要的指标
                    }
                ],
                'dimensions': [
                    {
                        'name': 'ga:date'  # 可以替换为你需要的维度
                    }
                ]
            }
        ]
    }

    # 发送请求并获取响应
    response = analytics.reports().batchGet(body=body).execute()
    return response

def save_report_to_json(response, filename='analytics_report.json'):
    # 将响应数据保存到 JSON 文件
    with open(filename, 'w') as json_file:
        json.dump(response, json_file, indent=4)
    print(f"报告已保存到 {filename}")

def main():
    analytics = initialize_analyticsreporting()
    response = get_report(analytics)
    
    # 打印响应数据
    print(json.dumps(response, indent=4))

    # 保存响应数据到 JSON 文件
    save_report_to_json(response)

if __name__ == '__main__':
    main()
