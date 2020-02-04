var getSelectedTab = (tab) => {
    var tabId = tab.id;
    var sendMessage = (messageObj) => chrome.tabs.sendMessage(tabId, messageObj);

    chrome.storage.local.get("checktest", items=>{
      if(items.checktest){
        $('input[name="startCheck"]')[items.checktest.startCheck].checked = true;
      } 
    });
  
    
    //$('input[name="startCheck"]')[1].checked = true
    //var method =$("input[name='doway']:checked").val();
    document.getElementById('rotate').addEventListener('click', () => sendMessage({ action: 'ROTATE' }));
    document.getElementById('saveData').addEventListener('click', (event) => {
      chrome.storage.local.set({
        checktest:  {
          startCheck:$("input[name='startCheck']:checked").val(),
          }
      });
      
      window.location.reload();
      sendMessage({ action: 'Save' })
    });
    
    
  }
  chrome.tabs.getSelected(null, getSelectedTab);
  