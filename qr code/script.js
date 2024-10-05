const qrCode = new QRCodeStyling({ width: 300,
    height: 300,
    
    margin: 10, dotsOptions: { color: "#000000",
    type: "square" // Default type is square
    
    },
    
    backgroundOptions: { color: "#ffffff",
    },
    
    imageOptions: { crossOrigin: "anonymous", margin: 20
    }
    
    });
    
    const wrapper = document.querySelector(".wrapper"), qrInput = document.getElementById("qr-input"),
    fgColorInput = document.getElementById("foreground-color"),
    
    
    
    
    bgColorInput = document.getElementById("background-color"), shapeSelect = document.getElementById("shape-select"), logoUpload = document.getElementById("logo-upload"), generateBtn = document.getElementById("generate-btn"), qrContainer = document.getElementById("qr-code"); generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim(); if (!qrValue) return;
    const newOptions = { data: qrValue, dotsOptions: {
    color: fgColorInput.value,
    
    type: shapeSelect.value // Update type based on user selection
    
    },
    
    backgroundOptions: { color: bgColorInput.value
    }
    
    };
    
    
    if (logoUpload.files[0]) {
    
    const reader = new FileReader(); reader.onload = (e) => { newOptions.image = e.target.result; qrCode.update(newOptions); qrCode.append(qrContainer);
    };
    
    reader.readAsDataURL(logoUpload.files[0]);
    
    } else { qrCode.update(newOptions); qrCode.append(qrContainer);
    }
    
    });
    
    qrInput.addEventListener("keyup", () => { if (!qrInput.value.trim()) { qrContainer.innerHTML = "";
    }
    
    });
    
    