import React from "react";
import CheckboxGroup from "../components/CheckboxGroup";
// import { Control, Label, LabelGroup, Section } from "../pages/AddSpellPage.css";

import { magicTraits } from "../lists/magicTraits";
import { getSelectedValues } from "../utils/utilities";
import "../pages/AddSpellPageStyle.css";
import RadioButtonGroup from "../components/RadioButtonGroup";

/**
 * displays the spell Foundation form. State is tracked in the parent. If values are passed in, they should be specifically for the foundation.
 *
 * values = foundation.*
 * update = function used to set the state.
 */
const FoundationForm = ({ values, update, onSubmit }) => {
  // const [foundationState, setFoundationState] = useState();
  const updateState = (name, newValue) => {
    update({
      ...values,
      [name]: newValue,
    });
  };

  const handleBlur = (name) => {
    if (name in values) {
      updateState(name, values[name].trim());
    }
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    let newValue;

    switch (type) {
      case "number":
        newValue = parseInt(value);
        break;
      case "select-multiple":
        newValue = getSelectedValues(event.target.id);
        break;
      case "checkbox":
        console.log(name, " is now ", event.target.checked);
        newValue = event.target.checked;
        break;
      case "textarea":
        newValue = value;
        break;
      default:
        newValue = value;
        break;
    }

    updateState(name, newValue);
  };

  // console.log(magicTraits);

  return (
    <form action="" onSubmit={onSubmit} name="foundationForm">
      <div className="inputGroup" info="spellname">
        <label htmlFor="spellname" className="leftLabel">
          Name
        </label>
        <input
          type="text"
          id="spellname"
          name="spellname"
          placeholder="TEMPLATE - P2e"
          value={values?.spellname || ""}
          onChange={handleChange}
        />
      </div>
      <div className="inputGroup" info="mana">
        <label htmlFor="mana" className="leftLabel">
          Mana
        </label>
        <input
          type="number"
          name="mana"
          id="mana"
          value={values?.mana || "0"}
          min="0"
          onChange={handleChange}
          required
        />
      </div>

      <fieldset id="traits">
        <legend>Traits</legend>
        <div className="inputGroup" info="rarity">
          <label htmlFor="traits_rarity" className="leftLabel">
            Rarity
          </label>
          <select
            name="traits_rarity"
            id="rarity"
            defaultValue={"Common"}
            onChange={handleChange}
          >
            <option value="Common">Common</option>
            <option value="Uncommon">Uncommon</option>
            <option value="Rare">Rare</option>
            <option value="Unique">Unique</option>
          </select>
        </div>
        <div className="inputGroup" info="difficulty">
          <label htmlFor="traits_difficulty" className="leftLabel">
            Difficulty
          </label>
          <select
            name="traits_difficulty"
            id="difficulty"
            onChange={handleChange}
            defaultValue={"A"}
          >
            <option value="IE">Incredibly Easy</option>
            <option value="VE">Very Easy</option>
            <option value="E">Easy</option>
            <option value="A">Average</option>
            <option value="H">Hard</option>
            <option value="VH">Very Hard</option>
            <option value="IH">Incredibly Hard</option>
          </select>
        </div>
        <div className="inputGroup" info="traits_list">
          <label htmlFor="traits_list" className="leftLabel">
            List
          </label>
          <select
            name="traits_list"
            id="traits_list"
            multiple
            onChange={handleChange}
          >
            {magicTraits.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
      </fieldset>

      <fieldset id="traditions">
        <legend>Traditions</legend>
        <CheckboxGroup
          name="traditions"
          valueList={["arcane", "divine", "occult", "primal"]}
          state={values}
          updateState={updateState}
        />
      </fieldset>

      {/* check https://www.w3schools.com/jsref/event_ondragleave.asp for some ideas on better way to do these lists (drag drop) */}
      <fieldset id="features">
        <legend>Features</legend>

        {/*
        <div className="inputGroup" info="">
          <label htmlFor="features_deities" className="leftLabel">
            Deities
          </label>
          <select
            name="features_deities"
            id="features_deities"
            onChange={handleChange}
            multiple
          ></select>
        </div>
        <div className="inputGroup" info="">
          <label htmlFor="features_domains" className="leftLabel">
            Domains
          </label>
          <select
            name="features_domains"
            id="features_domains"
            onChange={handleChange}
            multiple
          ></select>
        </div>
        <div className="inputGroup" info="">
          <label htmlFor="features_mysteries" className="leftLabel">
            Mysteries
          </label>
          <select
            name="features_mysteries"
            id="features_mysteries"
            onChange={handleChange}
            multiple
          ></select>
        </div>
        <div className="inputGroup" info="">
          <label htmlFor="features_revelations" className="leftLabel">
            Revelations
          </label>
          <select
            name="features_revelations"
            id="features_revelations"
            onChange={handleChange}
            multiple
          ></select>
        </div>
        <div className="inputGroup" info="">
          <label htmlFor="features_bloodlines" className="leftLabel">
            Bloodlines
          </label>
          <select
            name="features_bloodlines"
            id="features_bloodlines"
            onChange={handleChange}
            multiple
          ></select>
        </div>
        <div className="inputGroup" info="">
          <label htmlFor="features_patrons" className="leftLabel">
            Patrons
          </label>
          <select
            name="features_patrons"
            id="features_patrons"
            onChange={handleChange}
            multiple
          ></select>
        </div>
        <div className="inputGroup" info="">
          <label htmlFor="features_lessons" className="leftLabel">
            Lessons
          </label>
          <select
            name="features_lessons"
            id="features_lessons"
            onChange={handleChange}
            multiple
          ></select>
        </div>
        <div className="inputGroup" info="">
          <label htmlFor="features_schools" className="leftLabel">
            Schools
          </label>
          <select
            name="features_schools"
            id="features_schools"
            onChange={handleChange}
            multiple
          ></select>
        </div>
      */}
      </fieldset>

      <fieldset id="cast">
        <legend>Cast</legend>
        <div>
          {/* <!-- this div provides extra spacing around the input fileds. most notably it puts the other fieldsets on their own lines--> */}
          <div className="inputGroup" info="cast_actions">
            <label htmlFor="cast_actions" className="leftLabel">
              Actions
            </label>
            <input
              type="number"
              id="cast_actions"
              name="cast_actions"
              value={values?.cast_actions || "1"}
              min="0"
              max="3"
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup" info="cast_reaction">
            <input
              type="checkbox"
              id="cast_reaction"
              name="cast_reaction"
              checked={values?.cast_reaction}
              // value={values?.cast_reaction || "reaction"}
              onChange={handleChange}
            />
            <label htmlFor="cast_reaction" className="rightLabel">
              Can be cast as a reaction
            </label>
          </div>
          <fieldset id="components">
            <legend>Components</legend>
            <CheckboxGroup
              name="cast_components"
              valueList={["focus", "material", "somatic", "verbal"]}
              state={values}
              updateState={updateState}
            />
          </fieldset>

          <fieldset id="cost">
            <legend>Cost</legend>
            <div className="inputGroup" info="cast_cost_description">
              <label htmlFor="cast_cost_description" className="leftLabel">
                Description
              </label>
              <input
                type="text"
                id="cast_cost_description"
                name="cast_cost_description"
                value={values?.cast_cost_description || ""}
                onChange={handleChange}
              />
            </div>
            <div className="inputGroup" info="cast_cost_value_cp">
              <label htmlFor="cast_cost_value_cp" className="leftLabel">
                Value (cp)
              </label>
              <input
                type="number"
                id="cast_cost_value_cp"
                name="cast_cost_value_cp"
                value={values?.cast_cost_value_cp || "0"}
                min="0"
                onChange={handleChange}
              />
            </div>
          </fieldset>

          <div className="inputGroup" info="cast_requirements">
            <label htmlFor="cast_requirements" className="leftLabel">
              Requirements
            </label>
            <textarea
              id="cast_requirements"
              name="cast_requirements"
              rows="4"
              cols="50"
              value={values?.cast_requirements || ""}
              onChange={handleChange}
              onBlur={() => handleBlur("cast_requirements")}
            ></textarea>
          </div>
          <div className="inputGroup" info="cast_trigger">
            <label htmlFor="cast_trigger" className="leftLabel">
              Trigger
            </label>
            <textarea
              id="cast_trigger"
              name="cast_trigger"
              rows="4"
              cols="50"
              value={values?.cast_trigger || ""}
              onChange={handleChange}
              onBlur={() => handleBlur("cast_trigger")}
            ></textarea>
          </div>
        </div>
      </fieldset>

      <div className="inputGroup" info="range">
        <label htmlFor="range" className="leftLabel">
          Range
        </label>
        <input
          type="text"
          id="range"
          name="range"
          value={values?.range || ""}
          onChange={handleChange}
        />
      </div>

      <fieldset id="area">
        <legend>Area</legend>
        <div className="inputGroup" info="area_number">
          <label htmlFor="area_number" className="leftLabel">
            Number
          </label>
          <input
            type="number"
            id="area_number"
            name="area_number"
            min="1"
            value={values?.area_number || "1"}
            onChange={handleChange}
          />
        </div>
        <div className="inputGroup" info="area_size">
          <label htmlFor="area_size" className="leftLabel">
            Size
          </label>
          <input
            type="number"
            id="area_size"
            name="area_size"
            value={values?.area_size || ""}
            min="0"
            onChange={handleChange}
          />
        </div>
        {/* <!-- "comment_shape": "cube side, cylinder radius/height=4r, sphere radius" --> */}
        <fieldset id="shape">
          <legend>Shape</legend>
          <RadioButtonGroup
            name="shape"
            valueList={[
              {
                value: "cube",
                toolTipText: "size = length of a side",
              },
              {
                value: "cylinder",
                toolTip: "size = radius of the cylinder and 1/4 the height",
                default: true,
              },
              {
                value: "sphere",
                toolTip: "size = radius of the sphere",
              },
            ]}
            state={values}
            updateState={updateState}
          />
        </fieldset>
      </fieldset>

      <fieldset id="targets">
        <legend>Targets</legend>
        <div className="inputGroup" info="number_of_targets">
          <label htmlFor="number_of_targets" className="leftLabel">
            Number of Targets
          </label>
          <input
            type="number"
            id="number_of_targets"
            name="number_of_targets"
            value={values?.number_of_targets || "1"}
            min="0"
            onChange={handleChange}
          />
        </div>
        <div className="inputGroup" info="targets_description">
          <label htmlFor="targets_description" className="leftLabel">
            Description of the targets
          </label>
          <textarea
            id="targets_description"
            name="targets_description"
            rows="4"
            cols="50"
            value={
              values?.targets_description || "describe the target conditions"
            }
            onChange={handleChange}
            onBlur={() => handleBlur("targets_description")}
          ></textarea>
        </div>
        <div className="inputGroup" info="targets_proximity">
          <label htmlFor="targets_proximity" className="leftLabel">
            Proximity
          </label>
          <input
            type="number"
            id="targets_proximity"
            name="targets_proximity"
            value={values?.targets_proximity || "1"}
            min="0"
            onChange={handleChange}
          />
        </div>
      </fieldset>

      {/* <!-- isn't attack a trait? I'm not sure what this is for --> */}
      <div className="inputGroup" info="attack">
        <input
          type="checkbox"
          id="attack"
          name="attack"
          checked={values?.attack || false}
          onChange={handleChange}
        />
        <label htmlFor="attack" className="rightLabel">
          Attack
        </label>
      </div>

      <fieldset id="saving_throw">
        <legend>Saving Throw</legend>
        <div className="inputGroup" info="saving_throw_basic">
          <input
            type="checkbox"
            id="saving_throw_basic"
            name="saving_throw_basic"
            checked={values?.saving_throw_basic || false}
            onChange={handleChange}
          />
          <label htmlFor="saving_throw_basic" className="rightLabel">
            Basic
          </label>
        </div>
        <div className="inputGroup" info="saving_throw_type">
          <label htmlFor="saving_throw_type" className="leftLabel">
            Type
          </label>
          <input
            type="text"
            id="saving_throw_type"
            name="saving_throw_type"
            value={values?.saving_throw_type || ""}
            onChange={handleChange}
          />
        </div>

        <fieldset id="critcal_succcess">
          <legend>Critcal Succcess</legend>
          <div className="inputGroup" info="critcal_succcess_description">
            <label htmlFor="critcal_succcess_description" className="leftLabel">
              Description
            </label>
            <textarea
              id="critcal_succcess_description"
              name="critcal_succcess_description"
              rows="4"
              cols="50"
              value={values?.critcal_succcess_description || ""}
              onChange={handleChange}
              onBlur={() => handleBlur("critcal_succcess_description")}
            ></textarea>
          </div>
          <div className="inputGroup" info="critcal_succcess_duration">
            <label htmlFor="critcal_succcess_duration" className="leftLabel">
              Duration
            </label>
            <input
              type="number"
              id="critcal_succcess_duration"
              name="critcal_succcess_duration"
              value={values?.critcal_succcess_duration || ""}
              min="0"
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup" info="critcal_succcess_temp_immune">
            <label htmlFor="critcal_succcess_temp_immune" className="leftLabel">
              Temp_Immune
            </label>
            <input
              type="text"
              id="critcal_succcess_temp_immune"
              name="critcal_succcess_temp_immune"
              value={values?.critcal_succcess_temp_immune || ""}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <fieldset id="succcess">
          <legend>Succcess</legend>
          <div className="inputGroup" info="succcess_description">
            <label htmlFor="succcess_description" className="leftLabel">
              Description
            </label>
            <textarea
              id="succcess_description"
              name="succcess_description"
              rows="4"
              cols="50"
              value={values?.succcess_description || ""}
              onChange={handleChange}
              onBlur={() => handleBlur("succcess_description")}
            ></textarea>
          </div>
          <div className="inputGroup" info="succcess_duration">
            <label htmlFor="succcess_duration" className="leftLabel">
              Duration
            </label>
            <input
              type="number"
              id="succcess_duration"
              name="succcess_duration"
              value="0"
              min="0"
              value={values?.succcess_duration || ""}
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup" info="succcess_temp_immune">
            <label htmlFor="succcess_temp_immune" className="leftLabel">
              Temp_Immune
            </label>
            <input
              type="text"
              id="succcess_temp_immune"
              name="succcess_temp_immune"
              value={values?.succcess_temp_immune || ""}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <fieldset id="failure">
          <legend>Failure</legend>
          <div className="inputGroup" info="failure_description">
            <label htmlFor="failure_description" className="leftLabel">
              Description
            </label>
            <textarea
              id="failure_description"
              name="failure_description"
              rows="4"
              cols="50"
              value={values?.failure_description || ""}
              onChange={handleChange}
              onBlur={() => handleBlur("failure_description")}
            ></textarea>
          </div>
          <div className="inputGroup" info="failure_duration">
            <label htmlFor="failure_duration" className="leftLabel">
              Duration
            </label>
            <input
              type="number"
              id="failure_duration"
              name="failure_duration"
              value={values?.failure_duration || ""}
              min="0"
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup" info="failure_temp_immune">
            <label htmlFor="failure_temp_immune" className="leftLabel">
              Temp_Immune
            </label>
            <input
              type="text"
              id="failure_temp_immune"
              name="failure_temp_immune"
              value={values?.failure_temp_immune || ""}
              onChange={handleChange}
            />
          </div>
        </fieldset>

        <fieldset id="critical_failure">
          <legend>Critical Failure</legend>
          <div className="inputGroup" info="critical_failure_description">
            <label htmlFor="critical_failure_description" className="leftLabel">
              Description
            </label>
            <textarea
              id="critical_failure_description"
              name="critical_failure_description"
              rows="4"
              cols="50"
              value={values?.critical_failure_description || ""}
              onChange={handleChange}
              onBlur={() => handleBlur("critical_failure_description")}
            ></textarea>
          </div>
          <div className="inputGroup" info="critical_failure_duration">
            <label htmlFor="critical_failure_duration" className="leftLabel">
              Duration
            </label>
            <input
              type="number"
              id="critical_failure_duration"
              name="critical_failure_duration"
              value={values?.critical_failure_duration || ""}
              min="0"
              onChange={handleChange}
            />
          </div>
          <div className="inputGroup" info="critical_failure_temp_immune">
            <label htmlFor="critical_failure_temp_immune" className="leftLabel">
              Temp_Immune
            </label>
            <input
              type="text"
              id="critical_failure_temp_immune"
              name="critical_failure_temp_immune"
              value={values?.critical_failure_temp_immune || ""}
              onChange={handleChange}
            />
          </div>
        </fieldset>
      </fieldset>

      <fieldset id="damage">
        <legend>Damage</legend>
        <div className="inputGroup" info="damage_num_dice">
          <label htmlFor="damage_num_dice" className="leftLabel">
            Num Dice
          </label>
          <input
            type="number"
            id="damage_num_dice"
            name="damage_num_dice"
            value={values?.damage_num_dice || ""}
            min="0"
            onChange={handleChange}
          />
        </div>
        <div className="inputGroup" info="damage_die_size">
          <label htmlFor="damage_die_size" className="leftLabel">
            Die Size
          </label>
          <select
            name="damage_die_size"
            id="damage_die_size"
            defaultValue="6"
            onChange={handleChange}
          >
            <option value="4">d4</option>
            <option value="6">d6</option>
            <option value="8">d8</option>
            <option value="10">d10</option>
            <option value="12">d12</option>
            <option value="20">d20</option>
          </select>
        </div>
        <div className="inputGroup" info="damage_types">
          <label htmlFor="damage_types" className="leftLabel">
            Damage Types
          </label>
          <select
            name="damage_types"
            id="damage_types"
            onChange={handleChange}
            multiple
          >
            <option value="0">Add values</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </fieldset>

      <fieldset id="duration">
        <legend>Duration</legend>
        <div className="inputGroup" info="duration_rounds">
          <label htmlFor="duration_rounds" className="leftLabel">
            Rounds
          </label>
          <input
            type="number"
            id="duration_rounds"
            name="duration_rounds"
            value={values?.duration_rounds || ""}
            min="0"
            max="3"
            onChange={handleChange}
          />
        </div>

        <div className="inputGroup" info="dismiss">
          <label htmlFor="dismiss" className="leftLabel">
            Dismiss
          </label>
          <input
            type="text"
            id="dismiss"
            name="dismiss"
            value={values?.dismiss || ""}
            onChange={handleChange}
          />
        </div>

        <fieldset id="sustainListFieldset">
          <button className="toolTip" id="addSustainAction">
            Add Sustain Action
            <span className="toolTipText">
              <div className="code text">
                "sustain":{" "}
                {`[ <br />
                <div>
                  {"actions": 1, "description": "", "mana": 4},<br />
                  {"actions": 2, "description": "", "mana": 2}, <br />
                  {"actions": 3,"description": "", "mana": 0}
                </div>
                ]`}
              </div>
            </span>
          </button>
          <legend>Sustain Actions</legend>
          <ul id="sustainList"></ul>
          <p className="error" id="sustainError"></p>
        </fieldset>
      </fieldset>

      <div className="inputGroup" info="effect">
        <label htmlFor="effect" className="leftLabel">
          Effect
        </label>
        <textarea
          id="effect"
          name="effect"
          rows="4"
          cols="50"
          value={values?.effect || ""}
          onChange={handleChange}
          onBlur={() => handleBlur("effect")}
        ></textarea>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default FoundationForm;
