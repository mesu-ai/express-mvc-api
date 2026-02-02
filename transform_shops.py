import re
import json

# Read the file
with open('src/data/shop.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract all objects between the opening [ and closing ];
match = re.search(r'export const shops:ShopT\[\] = \[(.*?)\];', content, re.DOTALL)
if match:
    array_content = match.group(1)
    
    # Extract shopId and shopName pairs using regex
    shops_list = []
    
    # Use a more sophisticated approach to handle nested objects
    # Find all shopId and shopName pairs in sequence
    pattern = r'shopId:\s*(\d+).*?shopName:\s*"([^"]*)"'
    matches = re.findall(pattern, array_content, re.DOTALL)
    
    for shop_id, shop_name in matches:
        shops_list.append({'shopId': int(shop_id), 'shopName': shop_name})
    
    # Print the transformed array
    print(f"Found {len(shops_list)} shops")
    for i, shop in enumerate(shops_list):
        print(f"{i+1}. shopId: {shop['shopId']}, shopName: {shop['shopName']}")
