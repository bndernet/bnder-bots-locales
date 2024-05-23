import { TSLocalizationKeys } from "../TSLocalizationKeys";

export class TSLocalizations_hi {
    static Localizations: TSLocalizationKeys = {
        task: {
            deadline_due(id: string, deadline: string, guildName: string): string {
                return `कार्य की समय सीमा **${id}** सर्वर ${guildName} में ${deadline} पर देय है`;
            },
            assigned_notification(guildName: string): string {
                return `आपको सर्वर ${guildName} में एक कार्य सौंपा गया है`;
            },
            assigned_embed_title(id: string): string {
                return `कार्य ${id} सौंपा गया`;
            },
            assigned_embed_footer: "इन सूचनाओं को \"/preferences direct_messages\" कमांड का उपयोग करके अक्षम नहीं किया जा सकता है।",
            assigned_embed_button_in_progress: "प्रगति पर है के रूप में चिह्नित करें",
            assigned_embed_button_done: "पूर्ण हुआ चिह्नित करें",
            deadline_was_in_past(id: string, guildName: string): string {
                return `कार्य ${id} की समय सीमा सर्वर ${guildName} में अतिदेय है`;
            },
            repeat_notification(guildName: string): string {
                return `आपको जो कार्य सौंपा गया है उसे दोहराया गया है और उसे सर्वर ${guildName} में पूरा करने की आवश्यकता है`;
            },
            repeat_notification_embed_title(id: string): string {
                return `कार्य ${id} दोहराया गया`;
            },
            deadline_alert: "कार्य की समय सीमा",
            commented_embed_title(id: string): string {
                return `कार्य ${id} में टिप्पणी जोड़ी गई`;
            },
            commented_notification(guildName: string, author: string, commentText: string): string {
                return `एक टिप्पणी एक कार्य में सर्वर ${guildName} में ${author} द्वारा जोड़ी गई थी: ${commentText}`;
            }
        },
        webhookLogging: {
            id_field: "पहचान",
            deadline_field: "समय सीमा",
            assignees_field: "असाइनी",
            status_field: "स्थिति",
            subtasks_field: "उपकार्य",
            delete_at_field: "पर हटाएँ",
            project_field: "परियोजना",
            text_field: "मूलपाठ",
            role_field: "भूमिका",
            permission_field: "अनुमति",
            user_field: "उपयोगकर्ता",
            preset_field: "प्रीसेट",
            priority_field: "प्राथमिकता",
            label_field: "लेबल",
            personal_field: "निजी",
            manager_field: "प्रबंधक",
            repeat_interval_field: "दिनों में अंतराल दोहराएँ",
            repeat_end_date_field: "समाप्ति तिथि दोहराएँ",
            status_field_value(status: number): string {
                switch (status) {
                    case 0:
                        return "करने के लिए";
                    case 1:
                        return "प्रगति पर है";
                    case 2:
                        return "हो गया";
                    default:
                        return "अज्ञात";
                }
            },
            deadline_due: {
                title(id: string): string {
                    return `कार्य के लिए अंतिम तिथि ${id}`;
                },
                description(id: string, deadline: string): string {
                    return `कार्य की अंतिम तिथि **${id}** ${deadline} को देय है`;
                }
            },
            task_deleted: {
                title(id: string): string {
                    return `कार्य ${id} हटा दिया गया.`;
                },
                description(id: string): string {
                    return `कार्य ${id} हटा दिया गया.`;
                }
            },
            repeat_set: {
                title(id: string): string {
                    return `कार्य ${id} दोहराया गया.`;
                },
                description(id: string): string {
                    return `कार्य ${id} दोहराया गया और राज्य को कार्य करने के लिए निर्धारित किया गया।`;
                }
            },
            task_created: {
                title(id: string): string {
                    return `कार्य ${id} बनाया गया.`;
                },
                description(task_text: string, id: string): string {
                    return `कार्य ${id} पाठ के साथ बनाया गया था: ${task_text}`;
                }
            },
            task_updated: {
                title(id: string): string {
                    return `कार्य ${id} अपडेट किया गया.`;
                },
                description(id: string): string {
                    return `कार्य ${id} अद्यतन किया गया था और निम्नलिखित डेटा बदल दिया गया था।`;
                }
            },
            project_created: {
                title: "प्रोजेक्ट बनाया गया",
                description(projectName: string): string {
                    return `प्रोजेक्ट ${projectName} बनाया गया था`;
                }
            },
            project_deleted: {
                title: "प्रोजेक्ट हटा दिया गया",
                description(projectName: string): string {
                    return `प्रोजेक्ट ${projectName} हटा दिया गया था`;
                }
            },
            task_status_changed: {
                title(id: string): string {
                    return `कार्य ${id} स्थिति बदल गई`;
                }
            },
            permission_granted: {
                title: "की अनुमति दी",
            },
            permission_revoked: {
                title: "अनुमति रद्द कर दी गई",
            },
            preset_applied: {
                title: "प्रीसेट लागू किया गया",
            },
            deadline_was_in_past: {
                title(id: string): string {
                    return `कार्य ${id} की समय सीमा समाप्त हो चुकी है`;
                }
            },
            project_updated: {
                title: "प्रोजेक्ट अद्यतन किया गया",
                description(name: string): string {
                    return `प्रोजेक्ट ${name} अद्यतन किया गया था`;
                }
            },
            test_message: {
                title: "यह एक परीक्षण संदेश है",
                description: "यदि आप यह संदेश देखते हैं, तो वेबहुक सही ढंग से काम कर रहा है और लॉगिंग सक्षम है।"
            },
            comment_added: {
                title(id: string): string {
                    return `कार्य ${id} पर टिप्पणी जोड़ी गई`;
                }
            },
            comment_deleted: {
                title(id: string): string {
                    return `कार्य ${id} से टिप्पणी हटाई गई`;
                }
            }
        },
        event: {
            reminderDirectMessage(id: string, name: string, durationTillEventMinutes: number, guildName: string, startTime: string): string {
                return `आगामी इवेंट (${id}) **${name}** ${durationTillEventMinutes} मिनट में ${startTime} में ${guildName} में शुरू हो रहा है।`;
            },
            invite_notification: {
                content(inviterId: string, eventId: string, eventName: string, start: string, end: string): string {
                    return `आपको <@${inviterId}> द्वारा इवेंट ${eventId} के लिए आमंत्रित किया गया है: **${eventName}** ${start} से शुरू होकर ${end} पर ख़त्म होगा`;
                },
                accept_button: "स्वीकार करना",
                deny_button: "अस्वीकार करना"
            }
        }
    }
}