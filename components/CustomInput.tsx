import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

interface CustomInput {
    control: Control<any>;
    name: FieldPath<any>;
    label: string;
    placeholder: string;
}

const CustomInput = ({ control, name, label, placeholder}: CustomInput) => {
    const isDateField = name === "dateOfBirth";
    
    // Get current date for max date (18 years ago)
    const today = new Date();
    const minDate = new Date(today.getFullYear() - 100, today.getMonth(), today.getDate()); // 100 years ago
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate()); // 18 years ago

    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>
                        {label}
                    </FormLabel>
                    <FormControl>
                        <Input 
                            {...field}
                            placeholder={placeholder}
                            className="input-class"
                            type={isDateField ? "date" : name === "password" ? "password" : "text"}
                            value={isDateField ? (field.value || "") : field.value || ""}
                            min={isDateField ? minDate.toISOString().split('T')[0] : undefined}
                            max={isDateField ? maxDate.toISOString().split('T')[0] : undefined}
                            onChange={(e) => {
                                if (isDateField) {
                                    field.onChange(e.target.value || null);
                                } else {
                                    field.onChange(e.target.value);
                                }
                            }}
                        />
                    </FormControl>
                    <FormMessage className="text-red-500"/>
                </FormItem>
            )}
        />
    )
}

export default CustomInput;
