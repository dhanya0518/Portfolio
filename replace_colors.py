import re
import sys

def main():
    css_file = r"c:\Users\dhany\OneDrive\Documents\Portfolio\style.css"
    
    with open(css_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update HEX colors
    content = content.replace('#FAF3E0', '#F5EFE6') # Champagne beige -> Warm Beige
    content = content.replace('#FFD27D', '#C47A3A') # Sand gold -> Copper Gold
    content = content.replace('#8B1A33', '#D97742') # Burgundy -> Burnt Orange
    content = content.replace('#6D0D1D', '#485646') # Dark maroon -> Lighter Olive for gradients
    content = content.replace('#3B010B', '#3E4B3C') # Deep wine -> Dark Moss Green
    
    content = content.replace('#1A0307', '#2B2B2B') # Text page dark -> Charcoal
    
    # Hover gradients and variations
    content = content.replace('#4e020e', '#556552')
    content = content.replace('#4D020E', '#556552')
    content = content.replace('#250205', '#2F3A2E') # Footer background
    
    content = content.replace('#FFFDF7', '#FDFBF7') # Hero background
    content = content.replace('#F9F2E0', '#EFE7D8') # bg-light section
    
    # 2. Update RGBA colors using regex for flexibility with spaces
    # 250, 243, 224 -> 245, 239, 230 (Background)
    content = re.sub(r'250,\s*243,\s*224', '245, 239, 230', content)
    # 255, 210, 125 -> 196, 122, 58 (Gold -> Copper)
    content = re.sub(r'255,\s*210,\s*125', '196, 122, 58', content)
    # 139, 26, 51 -> 217, 119, 66 (Burgundy -> Orange)
    content = re.sub(r'139,\s*26,\s*51', '217, 119, 66', content)
    # 109, 0, 29 -> 72, 86, 70 (Dark maroon -> Lighter Olive)
    content = re.sub(r'109,\s*0,\s*29', '72, 86, 70', content)
    # 59, 1, 11 -> 62, 75, 60 (Deep wine -> Moss Green)
    content = re.sub(r'59,\s*1,\s*11', '62, 75, 60', content)
    
    # 242, 217, 160 (Another gold shade) -> Copper light (214, 153, 100)
    content = re.sub(r'242,\s*217,\s*160', '214, 153, 100', content)
    
    # 117, 22, 45 (Another burgundy shade) -> Orange shade (180, 95, 50)
    content = re.sub(r'117,\s*22,\s*45', '180, 95, 50', content)
    
    # 3. Specific element overrides:
    # Navbar/Footer should be #2F3A2E (Deep Olive).
    # Currently footer is: background: #250205; (already replaced above).
    # Navbar is: background: var(--bg-card); which is Deep Wine -> #3E4B3C.
    # But user wants Navbar/Footer: #2F3A2E. Let's explicitly change Navbar background.
    content = re.sub(r'(header\s*\{\s*background:\s*)var\(--bg-card\)', r'\1#2F3A2E', content)
    
    # Hover Glow: Button hover box-shadow uses RGBA, maybe we should use the glow #F4C7A1
    # #F4C7A1 is 244, 199, 161
    # Replace orange hover shadows with peach glow
    content = re.sub(r'rgba\(217,\s*119,\s*66,\s*0\.([0-9]+)\)', r'rgba(244, 199, 161, 0.\1)', content)
    content = re.sub(r'rgba\(196,\s*122,\s*58,\s*0\.([0-9]+)\)', r'rgba(244, 199, 161, 0.\1)', content)

    # 4. Button definitions
    # .btn.primary hover background to Sand Gold (#C47A3A) was Sand Gold, but user says Hover glow: #F4C7A1
    
    with open(css_file, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Colors replaced successfully.")

if __name__ == "__main__":
    main()
