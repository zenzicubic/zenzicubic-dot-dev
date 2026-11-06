import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  // Separate node modules into a vendor chunk for faster load times
  rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "framework",
              test: /node_modules\/(react|react-dom)/
            }
          ]
        }
      }
    }
})
