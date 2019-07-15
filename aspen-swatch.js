import { PolymerElement,html } from '@polymer/polymer/polymer-element.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
/**
 * `aspen-swatch` This component displays a non-editable  field
 *
 * @summary ShortDescription.
 * @customElement
 * @polymer
 * @extends {Polymer.Element}
 */
class AspenSwatch extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          --swatch-width: 50px;
          --swatch-height: 50px;
        }

        .swatch {
          width: var(--swatch-width);
          height: var(--swatch-height);
        }
      </style>

      <div class="swatch" style$="[[style]]"></div>
    `;
  }

  /**
   * String providing the tag name to register the element under.
   */
  static get is() {
    return 'aspen-swatch';
  }

  /**
   * Object describing property-related metadata used by Polymer features
   */
  static get properties() {
    return {
      color: {
        type: String,
        value: '#ffffffff'
      },

      style: {
        type: String,
        computed: '__computeStyle(color)'
      }
    };
  }

  __computeStyle(color) {
    return `background-color: ${color}`;
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  /**
   * Use for one-time configuration of your component after local DOM is initialized.
   */
  ready() {
    super.ready();

    afterNextRender(this, function() {});
  }
}

window.customElements.define(AspenSwatch.is, AspenSwatch);
