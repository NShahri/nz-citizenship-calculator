# React Simple Validation
This
## Proposal

### How to use

#### Sample 1
Set background color to red when the name field is not valid:
```javascript
    <ValidationContext name="error" email="no-valid" phone="">
        <Validation field='name' style={{backgrountColor: 'red'}}>
            <input type="text" />
        </Validation>
    </ValidationContext>
```

#### Sample 2
Set background color based on valdation error:
```javascript
    function validationStyle(validationState=''){
        if(validationStyle==='empty'){
            return({backgrountColor:'blue'});
        }

        if(validationStyle==='lessThan6'){
            return({backgrountColor:'red'});
        }

        return({});
    ]

    <ValidationContext password="empty" username="">
        <Validation field="password" style={validationStyle}>
            <input type="text" />
        </Validation>
    </ValidationContext>
```

#### Sample 3
Show error message based on validation error

```javascript
    <ValidationContext password="empty" username="">
        <Validation field="password" style={{backgroundColor 'red'}}>
            <ValidationMessage value="empty">
                Password can not be empty
            </ValidationMessage>
            <ValidationMessage value="lessThan6">
                Password has to be at least 6 character.
            </ValidationMessage>
            <input type="text" />
        </Validation>
    </ValidationContext>
```