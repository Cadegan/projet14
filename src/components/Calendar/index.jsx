import * as React from "react";
import { Controller } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
// import {
//   TextField,
//   Checkbox,
//   Select,
//   MenuItem,
//   Switch,
//   RadioGroup,
//   FormControlLabel,
//   ThemeProvider,
//   Radio,
//   createMuiTheme,
//   Slider,
// } from "@material-ui/core";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
// import MuiAutoComplete from "./MuiAutoComplete";

const Calendar = ({ control }) => (
  <div className="container">
    <section>
      <label>Date of Birth</label>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Controller
          name="MUIPicker"
          control={control}
          render={({ field: { ref, ...rest } }) => (
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              format="MM/dd/yyyy"
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
              required="true"
              {...rest}
            />
          )}
        />
      </MuiPickersUtilsProvider>
    </section>
  </div>
);

export default Calendar;
